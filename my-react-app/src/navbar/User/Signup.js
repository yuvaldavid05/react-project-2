import './Signup.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Signup() {
    return (
        <div className='frameSignup'>
            <h1><u>הרשמה</u></h1>
            <hr />
            <Form>
                <Row>
                    <Col>
                        <Form.Label>שם פרטי</Form.Label>
                        <Form.Control placeholder="שם פרטי" />
                    </Col>
                    <Col>
                        <Form.Label>שם אמצעי</Form.Label>
                        <Form.Control placeholder="שם אמצעי" />
                    </Col>
                    <Col>
                        <Form.Label>שם משפחה</Form.Label>
                        <Form.Control placeholder="שם משפחה" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>טלפון</Form.Label>
                        <Form.Control type="tel" placeholder="טלפון" />
                    </Col>
                    <Col>
                        <Form.Label>אימייל</Form.Label>
                        <Form.Control type="email" placeholder="הכנס אימייל" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>סיסמא</Form.Label>
                        <Form.Control type="password" placeholder="הכנס סיסמא" />
                    </Col>
                </Row>


                <Row className="mb-3">
                    <Col>
                        <Form.Label>תמונה </Form.Label>
                        <Form.Control type="text" placeholder="כתובת תמונה" />

                    </Col>
                    <Col>
                        <Form.Label>טקסט אלטרנטיבי</Form.Label>
                        <Form.Control placeholder="Alt" />

                    </Col>
                </Row>


                <Row>

                    <Col>
                        <Form.Label>מדינה</Form.Label>
                        <Form.Control placeholder="מדינה" />
                    </Col>
                    <Col>
                        <Form.Label>ארץ</Form.Label>
                        <Form.Control placeholder="ארץ" />
                    </Col>
                </Row>


                <Row className='RowCity'>
                    <Col xs={5}>
                        <Form.Label>עיר</Form.Label>
                        <Form.Control placeholder="מדינה" />
                    </Col>
                    <Col>
                        <Form.Label>רחוב</Form.Label>
                        <Form.Control placeholder="עיר" />
                    </Col>
                    <Col>
                        <Form.Label>מס' בית</Form.Label>
                        <Form.Control placeholder="מס' בית" />
                    </Col>
                    <Col>
                        <Form.Label>מיקוד</Form.Label>
                        <Form.Control placeholder="מיקוד" />
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