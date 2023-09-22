import './CardPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardPage() {
    return (
        <div className='cardPage' >

            <div className='headerCardPage' style={{ backgroundImage: 'url(https://medias.hashulchan.co.il/www/uploads/2019/02/%D7%9C%D7%95%D7%A7%D7%A1-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%A4%D7%99%D7%A7-%D7%92%D7%91%D7%90%D7%99-2000x1125.jpg)' }}>
                שם הכרטיסייה
            </div>

            <div className='bodyCardPage'>
                <p>שם:</p>
                <p>תאריך:</p>
                <p>כתובת:</p>
                <p>תאריך:</p>
            </div>

            <div className='footerCardPage'>
                <Container>
                    <Row>
                        <Col sm={4} className='col'>sm=4</Col>
                        <Col sm={8} className='col'>sm=8</Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}
export default CardPage;