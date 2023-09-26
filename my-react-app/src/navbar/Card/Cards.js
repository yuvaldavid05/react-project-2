import './Cards.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import VisitMe from './VisitMe';
import React, { useContext, useEffect, useState } from 'react';
import CardStructure from './CardStructure';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../../App';
import { RoleTypes } from '../NavbarTop2';
import AddCard2 from './AddCard2';



export const CardsContext = React.createContext();



function Cards() {
    // const [cards, setCards] = useState([]);
    const [like, setLike] = useState([]);
    const [unlike, setUnlike] = useState([]);
    const navigate = useNavigate();
    const { setLoader, roleType, user, cards, setCards } = useContext(GeneralContext);


    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setCards(data);
                if (data.favorite) {

                }

            }).finally(() => setLoader(false))
    }, []);


    return (
        <CardsContext.Provider value={{ like, setLike, unlike, setUnlike }}>
            <h1>מרכז העסקים שלי</h1>
            <Row xs={1} md={5} className="g-4 frameGrid">

                {cards.map(c => (
                    <CardStructure key={c.id} card={c} />
                    // <Card style={{ padding: '0' }} className="cardFrame">
                    //     <Card.Img variant="top" src={c.imgUrl} alt={c.imgAlt} />
                    //     <Card.Body>
                    //         <Card.Title>{c.title}</Card.Title>
                    //         <Card.Text>
                    //             {c.description}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             {c.city} , {c.street} {c.houseNumber}
                    //         </Card.Text>

                    //         <VisitMe nav={`/card/${c.id}`} />

                    //         <Stack direction="horizontal" gap={2} className='IconFrame' >
                    //             <Card.Link href="#" className="p-2 ms-auto cardLink">
                    //                 <AiOutlineHeart />
                    //             </Card.Link>
                    //             <Card.Link href="#" className="p-2 cardLink">
                    //                 <BiSolidEditAlt />
                    //             </Card.Link >
                    //             <Card.Link href="#" className="p-2 cardLink">
                    //                 <MdDelete />
                    //             </Card.Link>
                    //         </Stack>
                    //     </Card.Body>
                    // </Card>
                )
                )}

                {/* <Card style={{ padding: '0' }} className="cardFrame">
                    <Card.Img variant="top" src="https://medias.hashulchan.co.il/www/uploads/2019/02/%D7%9C%D7%95%D7%A7%D7%A1-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%A4%D7%99%D7%A7-%D7%92%D7%91%D7%90%D7%99-2000x1125.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <VisitMe />
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
                </Card> */}
            </Row>


            <div className='addCardIcon'>
                <AddCard2 />
            </div>

        </CardsContext.Provider>


    );
}

export default Cards;