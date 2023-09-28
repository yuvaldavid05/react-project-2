import './AddCard.css';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Joi from 'joi';
import { JOI_HEBREW } from '../../../joi-hebrew';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GeneralContext } from '../../../App';
import { useNavigate } from 'react-router-dom';


function ModalFullscreen() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);



    const [formData, setFormData] = useState({
        title: '',
        description: '',
        subtitle: '',
        phone: '',
        email: '',
        web: '',
        imgUrl: '',
        imgAlt: '',
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        zip: '',
    });
    const [errors, setErrors] = useState({});
    const { setLoader, cards, setCards } = useContext(GeneralContext);
    const navigate = useNavigate();

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }



    const structureNewCard = [
        { name: 'title', type: 'text', label: 'כותרת', required: true, block: false, sm: '12' },
        { name: 'description', type: 'text', label: 'תיאור', required: true, block: false, sm: '6' },
        { name: 'subtitle', type: 'text', label: 'כותרת משנה', required: true, block: false, sm: '6' },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false, sm: '6' },
        { name: 'web', type: 'text', label: 'אתר', required: false, block: true, sm: '4' },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', required: false, block: false, sm: '4' },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', required: false, block: false, sm: '4' },
        { name: 'state', type: 'text', label: 'מחוז', required: false, block: false, sm: '6' },
        { name: 'country', type: 'text', label: 'מדינה', required: true, block: false, sm: '6' },
        { name: 'city', type: 'text', label: 'עיר', required: true, block: false, sm: '4' },
        { name: 'street', type: 'text', label: 'רחוב', required: true, block: false, sm: '2' },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', required: true, block: false, sm: '2' },
        { name: 'zip', type: 'number', label: 'מיקוד', required: false, block: false, sm: '2' },
    ]

    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        const cardSchema = Joi.object({
            title: Joi.string().min(2).max(30).required(),
            description: Joi.string().min(2).max(200).required(),
            subtitle: Joi.string().min(2).max(15).required(),
            phone: Joi.string().min(2).max(10).required(),
            email: Joi.string().required().email({ tlds: false }),
            web: Joi.string().min(0).max(500),
            imgUrl: Joi.string().min(0).max(500),
            imgAlt: Joi.string().min(0).max(20),
            state: Joi.string().min(0).max(35),
            country: Joi.string().min(1).required(),
            city: Joi.string().min(1).required(),
            street: Joi.string().min(1).required(),
            houseNumber: Joi.number().min(1).required(),
            zip: Joi.number().min(0),
        });

        const schema = cardSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const err = { ...errors, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }
        }

        setFormData(obj);
        setErrors(err);
    };


    const addNewCard = (ev) => {
        ev.preventDefault();
        setLoader(true);

        fetch(`https://api.shipap.co.il/business/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCards(data);
                // setFullscreen(false);
                navigate('/');


            }).finally(() => setLoader(false))

    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    +
                </Button>
            ))}


            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>הוסף כרטיס</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addNewCard} style={{ width: '90%', margin: 'auto' }}>
                        <Row>
                            {structureNewCard.filter(strN => strN.sm).map(sNewCard => (
                                <>
                                    <Col sm={sNewCard.sm} key={sNewCard.name}>
                                        <Form.Label name={sNewCard.name}> {sNewCard.required ? sNewCard.label + ' *' : sNewCard.label}</Form.Label>
                                        <Form.Control placeholder={sNewCard.label} id={sNewCard.name} type={sNewCard.type} required={sNewCard.required} value={formData.name} className={sNewCard.required ? (errors[sNewCard.name] ? 'fieldError' : '') : ''} onChange={handleInputChange} />

                                        {sNewCard.required ? (errors[sNewCard.name] ? <div className='fieldErrorSignup'>{errors[sNewCard.name]}</div> : '') : ''}
                                    </Col>

                                </>
                            ))}
                        </Row >
                        <Button variant="primary" type="submit">
                            הוסף
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
}


export default ModalFullscreen;