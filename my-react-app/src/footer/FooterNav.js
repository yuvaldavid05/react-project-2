import './FooterNav.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Footer() {
    return (
        <>
            <ButtonGroup size="lg" className="mb-2" style={{ position: 'sticky', bottom: '0' }}>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </>
    );
}

export default Footer;