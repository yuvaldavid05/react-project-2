import './Login.css';
import Joi from 'joi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { GeneralContext } from '../../App';
import { JOI_HEBREW } from '../../joi-hebrew';
import { RoleTypes } from '../NavbarTop2';




// email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
// password: Joi.string().min(6).max(25).required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//     'password')

function Login() {
    const { user, setUser, isLogged, setIsLogged, setLoader, roleType, setRoleType, snackbarOn } = useContext(GeneralContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const loginSchema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(6).max(25).required(),
    });

    const navigate = useNavigate();

    const login = ev => {
        ev.preventDefault();
        setLoader(true);

        fetch(`https://api.shipap.co.il/clients/login?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
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
                setUser(data);
                setRoleType(RoleTypes.user);

                if (data.business) {
                    setRoleType(RoleTypes.business);
                } else if (data.admin) {
                    setRoleType(RoleTypes.admin);
                }
                snackbarOn("המשתמש התחבר בהצלחה");
                navigate('/');

                console.log(data);
                console.log(roleType);
            })
            .catch(err => {
                alert(err.message)
                console.log(err.message);
            })
            .finally(() => setLoader(false));
    }

    const handleError = ev => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        }

        setFormData(obj);

        const schema = loginSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const errors = {};

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                errors[id] = error.message;
            }

            setIsValid(false);
        } else {
            setIsValid(true);
        }

        setErrors(errors);
    }

    return (
        <div className='inputFrame'>
            <h1>התחברות</h1>
            <form onSubmit={login}>

                <Form.Group className="mb-3 formFieldLabel">
                    <Form.Control type="email" placeholder="הכנס אימייל" id='email' value={formData.email} className={errors.email ? 'fieldError' : ''} onChange={handleError} />
                </Form.Group>

                <Form.Text className="text-muted DivfieldError">
                    {errors.email ? errors.email : ''}
                </Form.Text>



                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="הכנס סיסמא" id='password' value={formData.password} className={errors.password ? 'fieldError' : ''} onChange={handleError} />
                </Form.Group>

                <Form.Text className="text-muted DivfieldError">
                    {errors.password ? errors.password : ''}
                </Form.Text>

                <Button variant="primary" type="submit" className='buttonForm'>
                    התחבר
                </Button>

                {loginError ? <div className='failedLoginFieldError'>{loginError}</div> : ''}
            </form>
            <br></br>
            <span>אין לך עדיין חשבון?
                <br></br>
                רוצה להצטרף אלינו ולהנות משלל מסעדות מומלצות ברחבי הארץ?</span>
            <br></br>
            <span><Link to="/signup">לחץ כאן להרשמה</Link></span>
        </div>
    );

}
export default Login;