import './FooterNav.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiInfoCircle, BiHeartCircle, BiSolidUserPin } from "react-icons/bi";

function FooterNav() {
    return (
        <>

            <ButtonGroup size="lg" className="mb-2">
                <Button>
                    <BiInfoCircle />
                    <span>אודות</span>
                </Button>
                <Button>
                    <BiHeartCircle />
                    <span>מועדפים</span>
                </Button>
                <Button>
                    <BiSolidUserPin />
                    <span>כרטיסים שלי</span>
                </Button>
            </ButtonGroup>

        </>
    );
}

export default FooterNav;