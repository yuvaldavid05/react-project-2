import './Card.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';

import Row from 'react-bootstrap/Row';



function Cards() {
    return (
        <>
            <h1>מרכז העסקים שלי</h1>
            <Row xs={1} md={5} className="g-4 frameGrid">
                <Card className="cardFrame">
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
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

                <Card className="cardFrame">
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
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

                <Card className="cardFrame">
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
                        <Card.Title style={{ marginTop: '10px' }}>
                            היי
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

                <Card className="cardFrame">
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
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
            </Row>

        </>
    );
}

export default Cards;