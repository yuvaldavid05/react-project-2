import './CardPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


function CardPage() {
    const { id } = useParams();
    const [cardFullPage, setCardFullPage] = useState({});


    const defaultImage = 'https://i.pinimg.com/564x/18/2d/58/182d58a899c4f5403900538636913d65.jpg';
    const cardImage = cardFullPage.imgUrl;

    useEffect(() => {
        fetch(`https://api.shipap.co.il/cards/${id}?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setCardFullPage(data);
                console.log(cardFullPage);
            });
    }, [])

    return (
        <div className='cardPage' >

            <div className='headerCardPage' style={{ backgroundImage: `url(${cardFullPage.imgUrl})` }}>
                {/* <Image src="https://i.pinimg.com/564x/18/2d/58/182d58a899c4f5403900538636913d65.jpg" fluid style={{ linearGradient: 'to center, rgba(48, 45, 45, 0.795), rgba(72, 62, 69, 0.833),`url(${cardFullPage.imgUrl})`' }} /> */}
                <h2>{cardFullPage.title}</h2>
            </div>

            {/* <div className='bodyCardPage'>
                <h3>אז קצת עלינו...</h3>
                <h6>{cardFullPage.subtitle}</h6>
                <p>{cardFullPage.description}</p>
                <h6>{cardFullPage.title}</h6>
                <p>כתובת:{cardFullPage.city}, {cardFullPage.street} {cardFullPage.houseNumber}</p>
                <span style={{ color: 'gray' }}>תאריך העלאה:{cardFullPage.createdTime}</span>
            </div> */}

            {/* <div className='footerCardPage'>
                <Container>
                    <Row>
                        <Col sm={4} className='col'>sm=4</Col>
                        <Col sm={8} className='col'>sm=8</Col>
                    </Row>
                </Container>
            </div> */}

            <div>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>


                        <div className='bodyCardPage'>
                            <h3>אז קצת עלינו...</h3>
                            <h6>{cardFullPage.subtitle}</h6>
                            <p>{cardFullPage.description}</p>
                            <h6>{cardFullPage.title}</h6>
                            <p>כתובת:{cardFullPage.city}, {cardFullPage.street} {cardFullPage.houseNumber}</p>
                            <span style={{ color: 'gray' }}>תאריך העלאה:{cardFullPage.createdTime}</span>
                        </div>
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
            </div>
        </div>

    )
}
export default CardPage;