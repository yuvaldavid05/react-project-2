import './FooterNav.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiInfoCircle, BiHeartCircle, BiSolidUserPin } from "react-icons/bi";
import { Link } from "react-router-dom";


function FooterNav() {
    return (
        <>

            <ButtonGroup size="lg" className="mb-2 groupFrame">
                <Button>
                    <Link to="/my-cards">
                        <BiSolidUserPin />
                        <span>כרטיסים שלי</span>
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
                </Button>
            </ButtonGroup>

        </>
    );
}

export default FooterNav;