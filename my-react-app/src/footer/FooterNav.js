import './FooterNav.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiInfoCircle, BiHeartCircle, BiSolidUserPin } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RoleTypes } from '../Navbar/NavbarTop2';
import { useContext } from 'react';
import { GeneralContext } from '../App';




const pagesFot = [
    { route: '/business/cards', title: 'הכרטיסים שלי', permissions: [RoleTypes.business, RoleTypes.admin], icon: <BiSolidUserPin /> },
    { route: '/cards/favorite', title: 'מועדפים', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin], icon: <BiHeartCircle /> },
    { route: '/about', title: 'אודות', icon: <BiInfoCircle /> },
];

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
}


function FooterNav() {
    const { roleType } = useContext(GeneralContext);

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

            </ButtonGroup>

        </>
    );
}

export default FooterNav;