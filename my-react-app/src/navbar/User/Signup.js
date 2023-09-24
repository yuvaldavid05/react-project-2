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
        phone: Joi.number().min(2).max(10).required(),
        password: Joi.string().min(6).max(25).required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'password'),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        imgUrl: Joi.string().min(0).max(500),
        imgAlt: Joi.string().min(0).max(20),
        state: Joi.string().min(0).max(20),
        country: Joi.string().min(1).required(),
        city: Joi.string().min(1).required(),
        street: Joi.string().min(1).required(),
        houseNumber: Joi.number().min(1).required(),
        zip: Joi.number().min(0),
        business: Joi.boolean().default(false),
    });

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


    const signup = ev => {
        setLoader(true);
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
            .then(data => {

            })
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => setLoader(false));
    }

    return (
        <div className='frameSignup'>
            <h1><u>הרשמה</u></h1>
            <hr />
            <Form onSubmit={signup}>
                <Row>
                    <Col>
                        <Form.Label>שם פרטי</Form.Label>
                        <Form.Control placeholder="שם פרטי" id='firstName' className={errors.firstName ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.firstName ? <div className='fieldErrorSignup'>{errors.firstName}</div> : ''}

                    </Col>
                    <Col>
                        <Form.Label>שם אמצעי</Form.Label>
                        <Form.Control placeholder="שם אמצעי" id='middleName' className={errors.middleName ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.middleName ? <div className='fieldErrorSignup'>{errors.middleName}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>שם משפחה</Form.Label>
                        <Form.Control placeholder="שם משפחה" id='lastName' className={errors.lastName ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.lastName ? <div className='fieldErrorSignup'>{errors.lastName}</div> : ''}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>טלפון</Form.Label>
                        <Form.Control type="tel" placeholder="טלפון" id='phone' className={errors.phone ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.phone ? <div className='fieldErrorSignup'>{errors.phone}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>אימייל</Form.Label>
                        <Form.Control type="email" placeholder="הכנס אימייל" id='email' className={errors.email ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.email ? <div className='fieldErrorSignup'>{errors.email}</div> : ''}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>סיסמא</Form.Label>
                        <Form.Control type="password" placeholder="הכנס סיסמא" id='password' className={errors.password ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.password ? <div className='fieldErrorSignup'>{errors.password}</div> : ''}
                    </Col>
                </Row>


                <Row className="mb-3">
                    <Col>
                        <Form.Label>תמונה </Form.Label>
                        <Form.Control type="text" placeholder="כתובת תמונה" id='imgUrl' className={errors.imgUrl ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.imgUrl ? <div className='fieldErrorSignup'>{errors.imgUrl}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>טקסט אלטרנטיבי</Form.Label>
                        <Form.Control placeholder="Alt" id='imgAlt' className={errors.imgAlt ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.imgAlt ? <div className='fieldErrorSignup'>{errors.imgAlt}</div> : ''}
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Form.Label>מחוז</Form.Label>
                        <Form.Control placeholder="מחוז" id='state' className={errors.state ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.state ? <div className='fieldErrorSignup'>{errors.state}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>מדינה</Form.Label>
                        <Form.Control placeholder="מדינה" id='country' className={errors.country ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.country ? <div className='fieldErrorSignup'>{errors.country}</div> : ''}
                    </Col>
                </Row>


                <Row className='RowCity'>
                    <Col xs={5}>
                        <Form.Label>עיר</Form.Label>
                        <Form.Control placeholder="עיר" id='city' className={errors.city ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.city ? <div className='fieldErrorSignup'>{errors.city}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>רחוב</Form.Label>
                        <Form.Control placeholder="רחוב" id='street' className={errors.street ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.street ? <div className='fieldErrorSignup'>{errors.street}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>מס' בית</Form.Label>
                        <Form.Control placeholder="מס' בית" id='houseNumber' className={errors.houseNumber ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.houseNumber ? <div className='fieldErrorSignup'>{errors.houseNumber}</div> : ''}
                    </Col>
                    <Col>
                        <Form.Label>מיקוד</Form.Label>
                        <Form.Control placeholder="מיקוד" id='zip' className={errors.zip ? 'fieldError' : ''} onChange={handleInputChange} />
                        {errors.zip ? <div className='fieldErrorSignup'>{errors.zip}</div> : ''}
                    </Col>
                </Row>



                <div className='divSpanBusiness'>משתמש עיסקי? לחץ על שדה הפרופיל העיסקי להשלמת התהליך:</div>
                <Col className='checkboxSignupForm' >

                    <div>פרופיל עיסקי</div>
                    <Form.Check aria-label="option 1" />
                </Col>

                <Button variant="primary" type="submit">
                    הירשם
                </Button>
            </Form>
        </div>
    );
}

export default Signup;