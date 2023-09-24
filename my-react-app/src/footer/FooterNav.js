import './FooterNav.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiInfoCircle, BiHeartCircle, BiSolidUserPin } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RoleTypes } from '../Navbar/NavbarTop2';
import { useContext } from 'react';
import { GeneralContext } from '../App';




const pagesFot = [
    { route: '/my-cards', title: 'הכרטיסים שלי', permissions: [RoleTypes.business, RoleTypes.admin], icon: <BiSolidUserPin /> },
    { route: '/favorite-cards', title: 'מועדפים', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin], icon: <BiHeartCircle /> },
    { route: '/about', title: 'אודות', icon: <BiInfoCircle /> },
];

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
}


function FooterNav() {
    const { user, roleType } = useContext(GeneralContext);

    return (
        <>

            <ButtonGroup size="lg" className="mb-2 groupFrame">
                {pagesFot.filter(p => !p.permissions || checkPermissions(p.permissions, roleType)).map((page) =>
                    <Button>
                        <Link to={page.route} key={page.route}>
                            {page.icon}
                            <span> {page.title}</span>
                        </Link>
                    </Button>
                )}
                {/* <Button>
                    <Link to="/favorite-cards">
                        <BiSolidUserPin />
                        <span>הכרטיסים שלי</span>
                    </Link>
                </Button>
                <Button>
                    <Link to="/favorite-cards">
                        <BiHeartCircle />
                        <span>מועדפים</span>
                    </Link>
                </Button>
                <Button>
                    <Link to="/about">
                        <BiInfoCircle />
                        <span>אודות</span>
                    </Link>
                </Button> */}
            </ButtonGroup>

        </>
    );
}

export default FooterNav;