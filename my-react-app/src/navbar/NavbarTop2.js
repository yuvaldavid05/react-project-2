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
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import SearchBar from './Searchbar';


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
    const { user, roleType, setUser, setRoleType, setLoader, snackbarOn } = useContext(GeneralContext);
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
                navigate('/');
                snackbarOn('המשתמש התנתק בהצלחה')
            }).finally(() => setLoader(false));
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary NavFrame">
            <Container fluid>
                <Navbar.Brand className='icon'>
                    <Link to="/">
                        Icon
                    </Link>
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
                            <NavDropdown title={user.admin ? user.fullName : user.firstName} id="navbarScrollingDropdown">
                                {settings.map((setting) => (
                                    <NavDropdown.Item>
                                        <Link to={setting.route} key={setting.route}>
                                            {setting.title}
                                        </Link>
                                    </NavDropdown.Item>
                                ))}
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>
                                    התנתק
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>}




                    {/* <Nav>

                        <NavDropdown title="שם מלא" id="nav-dropdown">
                            {settings.map((setting) => (
                                <Link to={setting.route} key={setting.route} >
                                    {setting.title}
                                </Link>
                            ))}
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}


                    {/* <Form className="d-flex searchInput">
                        <Form.Control
                            type="search"
                            placeholder="חיפוש"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className='searchButton'>חיפוש</Button>
                    </Form> */}

                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

