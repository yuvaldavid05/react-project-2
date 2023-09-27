import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarTop.css';
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { useContext } from 'react';
import { GeneralContext } from '../App';

import Dropdown from 'react-bootstrap/Dropdown';


export const RoleTypes = {
    none: 0,
    user: 1,
    business: 2,
    admin: 3,
};

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
}

const pages = [
    { route: '/about', title: 'אודות' },
    { route: '/login', title: 'התחבר', permissions: [RoleTypes.none] },
    { route: '/signup', title: 'הרשמה', permissions: [RoleTypes.none] },
    { route: '/favorite-cards', title: 'מועדפים', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
    { route: '/my-cards', title: 'הכרטיסים שלי', permissions: [RoleTypes.business, RoleTypes.admin] },
    { route: '/AdminManagement', title: 'ניהול משתמשים', permissions: [RoleTypes.admin] },
];

const settings = [
    { route: '/account', title: 'אזור אישי', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
];

export default function NavbarTop() {
    const { user, roleType, setUser, setRoleType, setLoader } = useContext(GeneralContext);
    const navigate = useNavigate();
    const path = useResolvedPath().pathname;
    console.log(path);


    const logout = () => {
        setLoader(true);

        fetch(`https://api.shipap.co.il/clients/logout`, {
            credentials: 'include',
        })
            .then(() => {
                setUser();
                setRoleType(RoleTypes.none);
                setLoader(false);

                navigate('/');
            });
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary NavFrame">
            <Container fluid>
                <Navbar.Brand className='Icon'>
                    <Link to="/">Icon</Link>
                </Navbar.Brand>
                <div className="vr" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 ms-auto my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {pages.filter(p => !p.permissions || checkPermissions(p.permissions, roleType)).map((page) => (
                            <Nav.Link className={page.route === path ? 'activeColor' : ''}>
                                <Link to={page.route} key={page.route}>
                                    {page.title}

                                </Link>
                            </Nav.Link>
                        ))}
                    </Nav>

                    {user &&
                        <Nav>
                            {settings.map(setting => (
                                <Link to={setting.route} key={setting.route}>
                                    <NavDropdown title="שם מלא" id="navbarScrollingDropdown">
                                        <NavDropdown.Item>
                                            {setting.title}
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logout}>
                                            התנתק
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Link>
                            ))}


                        </Nav>}




                    {/* settings.map(((setting) => (
                            <NavDropdown title={user.firstName} id="nav-dropdown">
                                <Link to={setting.route} key={setting.route} >
                                    <NavDropdown.Item eventKey="4.1">{setting.title}</NavDropdown.Item>
                                </Link>

                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4" >Separated link</NavDropdown.Item>
                            </NavDropdown>
                        ))) */}



                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Link to={setting.route} key={setting.route}>
                                <Dropdown.Item href="#/action-1">
                                {setting.title}
                                </Dropdown.Item>
                                <hr/>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Form className="d-flex searchInput">
                        <Form.Control
                            type="search"
                            placeholder="חיפוש"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className='searchButton'>חיפוש</Button>
                    </Form>




                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

