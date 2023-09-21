import './Cards.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import VisitMe from './VisitMe';



function Cards() {

    return (
        <>
            <h1>מרכז העסקים שלי</h1>
            <Row xs={1} md={5} className="g-4 frameGrid">
                <Card className="cardFrame" >
                    <Card.Body>
                        <Card.Img variant="top" src="https://medias.hashulchan.co.il/www/uploads/2019/02/%D7%9C%D7%95%D7%A7%D7%A1-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%A4%D7%99%D7%A7-%D7%92%D7%91%D7%90%D7%99-2000x1125.jpg" />
                        <Card.Title style={{ marginTop: '10px' }}> היי
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Stack direction="horizontal" gap={2} >
                            <Card.Link href="#" className="p-2 cardLink">
                                <MdDelete />
                            </Card.Link>
                            <Card.Link href="#" className="p-2 cardLink">
                                <BiSolidEditAlt />
                            </Card.Link >
                            <Card.Link href="#" className="p-2 cardLink ms-auto">
                                <AiOutlineHeart />
                            </Card.Link>
                        </Stack>
                    </Card.Body>
                </Card>








                <Card style={{ padding: '0' }} className="cardFrame">
                    <Card.Img variant="top" src="https://medias.hashulchan.co.il/www/uploads/2019/02/%D7%9C%D7%95%D7%A7%D7%A1-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%A4%D7%99%D7%A7-%D7%92%D7%91%D7%90%D7%99-2000x1125.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            <VisitMe />
                            <br></br>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Stack direction="horizontal" gap={2} className='IconFrame' >
                            <Card.Link href="#" className="p-2 ms-auto cardLink">
                                <AiOutlineHeart />
                            </Card.Link>
                            <Card.Link href="#" className="p-2 cardLink">
                                <BiSolidEditAlt />
                            </Card.Link >
                            <Card.Link href="#" className="p-2 cardLink">
                                <MdDelete />
                            </Card.Link>
                        </Stack>
                    </Card.Body>
                </Card>
            </Row>

            <div className='addCardIcon'>
                +
            </div>
        </>


    );
}

export default Cards;