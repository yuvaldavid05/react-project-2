import './Cards.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import VisitMe from './VisitMe';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GeneralContext } from '../../App';
import { RoleTypes } from '../NavbarTop2';

function CardStructure({ card }) {
    const [like, setLike] = useState([]);
    const [unlike, setUnlike] = useState([]);
    const { setLoader, roleType, user, cards, setCards } = useContext(GeneralContext);



    const likedCard = (id) => {

        fetch(`https://api.shipap.co.il/cards/${id}/favorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
            .then(() => {
                console.log("נוסף כרטיס מועדף")
                setLike();
            });
    }


    return (
        <>
            <Card style={{ padding: '0' }} className="cardFrame">
                <Card.Img variant="top" src={card.imgUrl} alt={card.imgAlt} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.description}
                    </Card.Text>
                    <Card.Text>
                        {card.city} , {card.street} {card.houseNumber}
                    </Card.Text>

                    <VisitMe nav={`/card/${card.id}`} />

                    <Stack direction="horizontal" gap={2} className='IconFrame' >
                        {(roleType === RoleTypes.business) || (roleType === RoleTypes.user) || (roleType === RoleTypes.none) ?
                            <Card.Link onClick={() => likedCard(card.id)} className="p-2 ms-auto cardLink">
                                <AiOutlineHeart />
                            </Card.Link>
                            : ''
                        }

                        {(roleType === RoleTypes.business && card.clientId === user.id) ?
                            <Card.Link href="#" className="p-2 cardLink">
                                <BiSolidEditAlt />
                            </Card.Link >
                            : ''
                        }

                        {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business && card.clientId === user.id) ?
                            <Card.Link href="#" className="p-2 cardLink">
                                <MdDelete />
                            </Card.Link>
                            : ''
                        }
                    </Stack>
                </Card.Body>
            </Card>
        </>

    );
}

export default CardStructure;