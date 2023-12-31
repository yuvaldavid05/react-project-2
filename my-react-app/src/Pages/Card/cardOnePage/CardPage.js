import './CardPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { GeneralContext } from '../../../App';


function CardPage() {
    const { id } = useParams();
    const [cardFullPage, setCardFullPage] = useState({});
    const { setLoader } = useContext(GeneralContext);


    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards/${id}?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setCardFullPage(data);
            }).finally(() => setLoader(false))
    }, [])

    return (
        <div className='cardPage' >

            <div>
                <Link to="/">
                    <button className='btnBackToCards'>
                        <b>
                            <AiOutlineArrowRight />
                            לדף הראשי
                        </b>
                    </button>
                </Link>
            </div>

            <Container>
                <Row>
                    <Col md={6} style={{ margin: '0', padding: '0' }}>
                        <div className='headerCardPage' style={{ backgroundImage: `url(${cardFullPage.imgUrl})` }}>
                            <h2>{cardFullPage.title}</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='bodyCardPage'>
                            <h3>אז קצת עלינו...</h3>
                            <hr />
                            <h6>{cardFullPage.subtitle}</h6>
                            <p>{cardFullPage.description}</p>
                            <h6>{cardFullPage.title}</h6>
                            <p>כתובת: {cardFullPage.city}, {cardFullPage.street} {cardFullPage.houseNumber}</p>
                            <p> טלפון המסעדה : {cardFullPage.phone}</p>
                            <p>אימייל לשמירת מקומות: {cardFullPage.email}</p>


                            <div className='iconFrameCardPage'>
                                <div>
                                    <BsFillTelephoneFill />
                                </div>
                                <div>
                                    <AiOutlineMail />
                                </div>
                                <div>
                                    <MdPlace />
                                </div>
                            </div>
                            <span style={{ color: 'gray' }}>תאריך העלאה: {cardFullPage.createdTime}</span>
                        </div>

                        {(cardFullPage.web || cardFullPage.state) &&
                            <>
                                <hr />
                                <h6> פרטים נוספים שהמסעדה שיתפה איתנו:</h6>
                                <BsFillBalloonHeartFill />
                                {cardFullPage.web &&
                                    <p> אתר המסעדה : {cardFullPage.web}</p>
                                }

                                {cardFullPage.state &&
                                    <p> מחוז בו המסעדה נמצאת : {cardFullPage.state}</p>
                                }
                            </>
                        }
                    </Col>
                </Row>



            </Container>
            {cardFullPage.favorite === true &&
                <div className='messageFav'>
                    <h3>מסעדה זאת נמצאת במועדפים שלך !</h3>
                </div>
            }



        </div>

    )
}
export default CardPage;