import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarTop.css';
import { Link } from "react-router-dom";


export default function NavbarTop() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary NavFrame">
            <Container fluid>
                <Navbar.Brand className='Icon'>
                    <Link to="/">Icon</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to="/about">אודות</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/my-cards">כרטיסים שלי</Link>
                        </Nav.Link>

                        <Nav.Link >
                            <Link to="/favorite-cards">מועדפים </Link>
                        </Nav.Link>

                        <Nav.Link >
                            <Link to="/clientsAdmin">תיבת מידע</Link>
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <NavDropdown title="שם מלא" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">עריכת פרטים</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                התנתק
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex formFrame">
                        <Form.Control
                            type="search"
                            placeholder="חיפוש"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">חיפוש</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

