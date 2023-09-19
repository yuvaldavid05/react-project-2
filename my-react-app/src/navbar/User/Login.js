import './Login.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';


function Login() {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });

    const login = ev => {
        ev.preventDefault();

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

            })
            .catch(err => {
                console.log(err.message);
            });
    }

    return (
        <div className='inputFrame'>
            <h1>התחברות</h1>
            <form onSubmit={login}>

                <FloatingLabel
                    controlId="floatingInput"
                    label="אימייל"
                    className="mb-3 formField"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="סיסמא" className='formField '>
                    <Form.Control type="password" placeholder="סיסמא" className='hey' />
                </FloatingLabel>

                <Button variant="outline-primary buttonForm">היכנס</Button>
                <br></br>
                <span>אין לך עדיין חשבון?
                    <br></br>
                    רוצה להצטרף אלינו ולהנות משלל מסעדות מומלצות ברחבי הארץ?</span>
                <br></br>
                <span><Link to="/signup">לחץ כאן להרשמה</Link></span>
            </form>
        </div>
    );

}
export default Login;