import './Signup.css';
import Joi from 'joi';
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { GeneralContext } from '../../App';
import { JOI_HEBREW } from '../../joi-hebrew';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        imgUrl: "",
        imgAlt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
        business: "",
    });

    const [errors, setErrors] = useState({});
    const { setLoader, snackbarOn } = useContext(GeneralContext);
    const navigate = useNavigate();

    const loginSchema = Joi.object({
        firstName: Joi.string().min(2).max(10).required(),
        middleName: Joi.string().min(2).max(10),
        lastName: Joi.string().min(2).max(10).required(),
        phone: Joi.string().regex(/^[0-9]{10,15}$/).messages({ 'string.pattern.base': `טלפון חייב להיות לפחות 10 ספרות` }).required(),
        password: Joi.string().min(8).max(32).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=(.*?[0-9]){4})(?=.*?[#?!@$%^&*-]).{8,}$/).required().messages({
            "string.pattern.base": "הסיסמה חייבת לכלול לפחות אות אחת גדולה ואות אחת קטנה באנגלית, לפחות ארבעה מספרים וסימן מיוחד מבין הסימנים הבאים (!@%$#^&*-_*)",
        }),
        email: Joi.string().required().email({ tlds: false }),
        imgUrl: Joi.string().min(0).max(500),
        imgAlt: Joi.string().min(0).max(20),
        state: Joi.string().min(0).max(35),
        country: Joi.string().min(1).required(),
        city: Joi.string().min(1).required(),
        street: Joi.string().min(1).required(),
        houseNumber: Joi.number().min(1).required(),
        zip: Joi.number().min(0),
        business: Joi.boolean().default(false),
    });

    const structure = [
        { name: 'firstName', type: 'text', label: 'שם פרטי', required: true, block: false, sm: '4' },
        { name: 'middleName', type: 'text', label: 'שם אמצעי', required: false, block: false, sm: '4' },
        { name: 'lastName', type: 'text', label: 'שם משפחה', required: true, block: false, sm: '4' },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false, sm: '6' },
        { name: 'password', type: 'password', label: 'סיסמה', required: true, block: true, sm: '12' },
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

    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        let obj = {};

        if (id === 'business') {
            obj = {
                ...formData,
                [id]: value === 'on',
            };
        } else {
            obj = {
                ...formData,
                [id]: value,
            };
        }


        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const err = { ...errors, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }


        } else {


        }

        setFormData(obj);
        setErrors(err);
    };


    const signup = ev => {
        setLoader(true);
        ev.preventDefault();

        fetch(`https://api.shipap.co.il/clients/signup?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then(x => {
                        throw new Error(x);
                    });
                }
            })
            .then(() => {
                navigate('/login');
                snackbarOn('המשתמש נרשם בהצלחה')
                console.log(formData);
            })
            .catch(err => {
                alert(err.message);
            })
            .finally(() => setLoader(false))
    }


    return (

        <div className='frameSignup'>
            <h1><u>הרשמה</u></h1>
            <hr />
            <Form onSubmit={signup} className='formSignUp'>
                <Row>
                    {structure.filter(str => str.sm).map(s => (
                        s.type === 'boolean' ?
                            <React.Fragment key={s.name}>
                                <div className='divSpanBusiness'>משתמש עיסקי? לחץ על שדה הפרופיל העיסקי להשלמת התהליך:</div>
                                <Col className='checkboxSignupForm' >
                                    <Form.Check
                                        type="switch"
                                        id={s.name}
                                        label={s.label}
                                        onChange={handleInputChange}
                                    />
                                </Col>

                            </React.Fragment >
                            :
                            <Col sm={s.sm} key={s.name} >
                                <Form.Label name={s.name}>{s.required ? s.label + ' *' : s.label}</Form.Label>
                                <Form.Control placeholder={s.label} id={s.name} type={s.type} required={s.required} className={s.required ? (errors[s.name] ? 'fieldError' : '') : ''} onChange={handleInputChange} />
                                {s.required ? (errors[s.name] ? <div className='fieldErrorSignup'>{errors[s.name]}</div> : '') : ''}
                            </Col>
                    )
                    )}
                </Row>



                <Button variant="primary" type="submit">
                    הירשם
                </Button>
            </Form>
        </div >

    );
}

export default Signup;