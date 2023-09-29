import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Joi from 'joi';
import { JOI_HEBREW } from '../../joi-hebrew';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GeneralContext } from '../../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

function AdmitEditClient() {
    const { clientId } = useParams();
    const [item, setItem] = useState({});
    const [allClients, setAllClients] = useState([]);
    const [errorsCard, setErrorsCard] = useState({});
    const [isValidCard, setIsValidCard] = useState(false);
    const { setLoader, snackbarOn } = useContext(GeneralContext);
    const navigate = useNavigate();


    const structureNewCard = [
        { name: 'firstName', type: 'text', label: 'שם פרטי', required: true, block: false, sm: '4' },
        { name: 'middleName', type: 'text', label: 'שם אמצעי', required: false, block: false, sm: '4' },
        { name: 'lastName', type: 'text', label: 'שם משפחה', required: true, block: false, sm: '4' },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false, sm: '6' },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', required: false, block: false, sm: '6' },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', required: false, block: false, sm: '6' },
        { name: 'state', type: 'text', label: 'מחוז', required: false, block: false, sm: '6' },
        { name: 'country', type: 'text', label: 'מדינה', required: true, block: false, sm: '6' },
        { name: 'city', type: 'text', label: 'עיר', required: true, block: false, sm: '4' },
        { name: 'street', type: 'text', label: 'רחוב', required: true, block: false, sm: '2' },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', required: true, block: false, sm: '2' },
        { name: 'zip', type: 'number', label: 'מיקוד', required: false, block: false, sm: '2' },
        { name: 'business', type: 'boolean', label: 'לקוח עסקי', required: true, block: false, sm: '6' },

    ]


    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/admin/clients?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setAllClients(data);
                const c = allClients.filter(cl => cl.id === clientId);
                setItem(c);
                console.log(c);
            }).finally(setLoader(false))
    }, [])



    // const handleInputChange = (ev) => {
    //     const { id, value } = ev.target;

    //     const obj = {
    //         ...item,
    //         [id]: value,
    //     };

    //     const cardSchema = Joi.object({
    //         title: Joi.string().min(2).max(30).required(),
    //         description: Joi.string().min(2).max(200).required(),
    //         subtitle: Joi.string().min(2).max(15).required(),
    //         phone: Joi.string().min(2).max(10).required(),
    //         email: Joi.string().required().email({ tlds: false }),
    //         web: Joi.string().min(0).max(500),
    //         imgUrl: Joi.string().min(0).max(500),
    //         imgAlt: Joi.string().min(0).max(20),
    //         state: Joi.string().min(0).max(35),
    //         country: Joi.string().min(1).required(),
    //         city: Joi.string().min(1).required(),
    //         street: Joi.string().min(1).required(),
    //         houseNumber: Joi.number().min(1).required(),
    //         zip: Joi.number().min(0),
    //     });

    //     const schema = cardSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
    //     const err = { ...errorsCard, [id]: undefined };

    //     if (schema.error) {
    //         const error = schema.error.details.find(e => e.context.key === id);

    //         if (error) {
    //             err[id] = error.message;
    //         }

    //         setIsValidCard(false);

    //     } else {
    //         setIsValidCard(true);
    //     }

    //     setItem(obj);
    //     setErrorsCard(err);
    // };


    // const addNewCard = (ev) => {
    //     ev.preventDefault();
    //     setLoader(true);

    //     fetch(`https://api.shipap.co.il/admin/clients/${id}?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
    //         credentials: 'include',
    //         method: 'PUT',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify(item),
    //     })
    //         .then(() => {
    //             snackbarOn('הכרטיס עודכן בהצלחה');
    //             navigate('/admin/clients');
    //         });

    // }

    return (
        <>
            <div>
                <Link to="/admin/clients" style={{ textDecoration: 'none' }}>
                    <button className='btnBackToCards'>
                        <b>
                            <AiOutlineArrowRight />
                            חזרה
                        </b>
                    </button>
                </Link>
            </div>
            <Form id='formAddCard'>
                <h1> עריכת השראות משתמש {item.firstName} {item.lastName} </h1>
                <span>{item.id}</span>
                <hr />
                <Row>
                    {structureNewCard.filter(strN => strN.sm).map(sNewCard => (
                        <>
                            <Col sm={sNewCard.sm} key={sNewCard.name} >
                                <Form.Label name={sNewCard.name}>{sNewCard.required ? sNewCard.label + ' *' : sNewCard.label}</Form.Label>
                                <Form.Control placeholder={sNewCard.label} id={sNewCard.name} type={sNewCard.type} required={sNewCard.required} value={item[sNewCard.name]} />
                            </Col>

                        </>
                    ))}
                </Row >


                {/* <h6>הרשאה נוכחית של המשתמש :</h6>
                <h6><u>{(item.business && !item.admin) ? 'עיסקי' : 'משתמש פעיל'}</u></h6>

                <label>שינוי הרשאות משתמש ל - </label>
                <select name='permission'>
                    <option></option>
                    <option>{item.business ? 'משתמש פעיל' : 'משתמש עיסקי'}</option>
                    <option></option>
                </select>
                <Button variant="primary" type="submit" disabled={!item.id && !isValidCard}>
                    שמירת שינויים
                </Button> */}
            </Form >
        </>
    );
}

export default AdmitEditClient;