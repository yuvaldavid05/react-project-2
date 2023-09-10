import './Card.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Row from 'react-bootstrap/Row';



function Cards() {
    return (
        <>
            <Row xs={1} md={5} className="g-4">
                <Card style={{ width: '18rem', margin: '10px 20px' }}>
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
                        <Card.Title> היי
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '10px 20px' }}>
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
                        <Card.Title> היי
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '10px 20px' }}>
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
                        <Card.Title> היי
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '10px 20px' }}>
                    <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLf1Dq97oSnihQiKkEBaCj6Z_msp2Rc3s-ZTfyJqWVw&s" />
                        <Card.Title> היי
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Row>

        </>
    );
}

export default Cards;