import './AddCard.css';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Joi from 'joi';
import { JOI_HEBREW } from '../../../joi-hebrew';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GeneralContext } from '../../../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';


function AddCard() {
    const { id } = useParams();
    const [formDataCard, setFormDataCard] = useState({});
    const [errorsCard, setErrorsCard] = useState({});
    const { setLoader, snackbarOn } = useContext(GeneralContext);
    const navigate = useNavigate();




    const structureNewCard = [
        { name: 'title', type: 'text', label: 'כותרת', required: true, block: false, sm: '12' },
        { name: 'description', type: 'text', label: 'תיאור', required: true, block: false, sm: '6' },
        { name: 'subtitle', type: 'text', label: 'כותרת משנה', required: true, block: false, sm: '6' },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false, sm: '6' },
        { name: 'web', type: 'text', label: 'אתר', required: false, block: true, sm: '4' },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', required: true, block: false, sm: '4' },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', required: true, block: false, sm: '4' },
        { name: 'state', type: 'text', label: 'מחוז', required: false, block: false, sm: '6' },
        { name: 'country', type: 'text', label: 'מדינה', required: true, block: false, sm: '6' },
        { name: 'city', type: 'text', label: 'עיר', required: true, block: false, sm: '4' },
        { name: 'street', type: 'text', label: 'רחוב', required: true, block: false, sm: '2' },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', required: true, block: false, sm: '2' },
        { name: 'zip', type: 'number', label: 'מיקוד', required: false, block: false, sm: '2' },
    ]


    useEffect(() => {
        if (id === 'new') {
            setFormDataCard({
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
        } else {
            setLoader(true);

            fetch(`https://api.shipap.co.il/cards/${id}?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
                credentials: 'include',
            })
                .then(res => res.json())
                .then(data => setFormDataCard(data))
                .finally(setLoader(false));
        }
    }, [id, setLoader])



    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        const obj = {
            ...formDataCard,
            [id]: value,
        };

        const cardSchema = Joi.object({
            title: Joi.string().min(2).max(30).required(),
            description: Joi.string().min(2).max(200).required(),
            subtitle: Joi.string().min(2).max(15).required(),
            phone: Joi.string().regex(/^[0-9]{10,15}$/).messages({ 'string.pattern.base': `טלפון חייב להיות לפחות 10 ספרות` }).required(),
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
        const err = { ...errorsCard, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }



        }
        setFormDataCard(obj);
        setErrorsCard(err);
    };


    const addNewCard = (ev) => {
        ev.preventDefault();
        setLoader(true);

        fetch(`https://api.shipap.co.il/business/cards` + (formDataCard.id ? `/${id}` : '') + `?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: formDataCard.id ? "PUT" : "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formDataCard),
        })
            .then(() => {

                if (formDataCard.id) {
                    snackbarOn('הכרטיס עודכן בהצלחה');
                } else {
                    snackbarOn('הכרטיס נוסף בהצלחה');
                }

                navigate('/');


            }).finally(() => setLoader(false));

    }

    return (
        <>
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='btnBackToCards'>
                        <b>
                            <AiOutlineArrowRight />
                            חזרה
                        </b>
                    </button>
                </Link>
            </div>
            <Form id='formAddCard' onSubmit={addNewCard}>
                <h1> {formDataCard.id ? 'עריכת' : 'הוספת'} כרטיסייה</h1>
                <hr />
                <Row>
                    {structureNewCard.filter(strN => strN.sm).map(sNewCard => (
                        <>
                            <Col sm={sNewCard.sm} key={sNewCard.name}>
                                <Form.Label name={sNewCard.name}> {sNewCard.required ? sNewCard.label + ' *' : sNewCard.label}</Form.Label>
                                <Form.Control placeholder={sNewCard.label} id={sNewCard.name} type={sNewCard.type} required={sNewCard.required} value={formDataCard[sNewCard.name]} className={sNewCard.required ? (errorsCard[sNewCard.name] ? 'fieldError' : '') : ''} onChange={handleInputChange} />

                                {sNewCard.required ? (errorsCard[sNewCard.name] ? <div className='fieldErrorAddCard'>{errorsCard[sNewCard.name]}</div> : '') : ''}
                            </Col>
                        </>
                    ))}
                </Row >
                <Button variant="primary" type="submit" >
                    {formDataCard.id ? 'שמירה' : 'הוספה'}
                </Button>
            </Form >
        </>
    );
}


export default AddCard;