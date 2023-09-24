import './Signup.css';
import Joi from 'joi';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GeneralContext } from '../../App';
import { JOI_HEBREW } from '../../joi-hebrew';




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
    const [isValid, setIsValid] = useState(false);
    const { setLoader } = useContext(GeneralContext);

    const loginSchema = Joi.object({
        firstName: Joi.string().min(2).max(10).required(),
        middleName: Joi.string().min(2).max(10),
        lastName: Joi.string().min(2).max(10).required(),
        phone: Joi.string().min(2).max(10).required(),
        password: Joi.string().min(6).max(25).required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'password'),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        imgUrl: Joi.string().min(0).required(),
    });

    const structure = [
        { name: 'firstName', type: 'text', label: 'שם פרטי', required: true, block: false, sm: '4' },
        { name: 'middleName', type: 'text', label: 'שם אמצעי', required: true, block: false, sm: '4' },
        { name: 'lastName', type: 'text', label: 'שם משפחה', required: true, block: false, sm: '4' },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false, sm: '6' },
        { name: 'password', type: 'password', label: 'סיסמה', required: true, block: false, sm: '12' },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', required: true, block: true, sm: '6' },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', required: true, block: false, sm: '6' },
        { name: 'state', type: 'text', label: 'מחוז', required: true, block: false, sm: '6' },
        { name: 'country', type: 'text', label: 'מדינה', required: true, block: false, sm: '6' },
        { name: 'city', type: 'text', label: 'עיר', required: true, block: false, sm: '2' },
        { name: 'street', type: 'text', label: 'רחוב', required: true, block: false, sm: '2' },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', required: true, block: false, sm: '2' },
        { name: 'zip', type: 'number', label: 'מיקוד', required: true, block: false, sm: '2' },
    ]

    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const err = { ...errors, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }

            setIsValid(false);
        } else {
            setIsValid(true);
        }

        setFormData(obj);
        setErrors(err);
    };


    // const signup = ev => {
    //     fetch(`https://api.shipap.co.il/clients/signup?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
    //         credentials: 'include',
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify(obj),
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json();
    //             } else {
    //                 return res.text().then(x => {
    //                     throw new Error(x);
    //                 });
    //             }
    //         })
    //         .then(data => {

    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //         });
    // }

    return (

        <div className='frameSignup'>
            <h1><u>הרשמה</u></h1>
            <hr />
            <Form >
                {structure.map(s => {
                    s.sm = "12" ?
                        < Row >
                            <Col sm={s.sm} key={s.name}>
                                <Form.Label>{s.label}</Form.Label>
                                <Form.Control placeholder={s.label} id={s.name} type={s.type} required={s.required} className={errors.middleName ? 'fieldError' : ''} onChange={handleInputChange} />
                            </Col>
                        </Row>
                        :
                        <Col sm={s.sm} key={s.name}>
                            <Form.Label>{s.label}</Form.Label>
                            <Form.Control placeholder={s.label} id={s.name} type={s.type} required={s.required} className={errors.middleName ? 'fieldError' : ''} onChange={handleInputChange} />
                        </Col>
                })}





                <div className='divSpanBusiness'>משתמש עיסקי? לחץ על שדה הפרופיל העיסקי להשלמת התהליך:</div>
                <Col className='checkboxSignupForm' >

                    <div>פרופיל עיסקי</div>
                    <Form.Check aria-label="option 1" />
                </Col>

                <Button variant="primary" type="submit">
                    הירשם
                </Button>
            </Form>
        </div >
    );
}

export default Signup;