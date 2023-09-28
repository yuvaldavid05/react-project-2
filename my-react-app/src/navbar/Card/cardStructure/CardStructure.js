// import './Cards.css';
import './CardStructure.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import Stack from 'react-bootstrap/Stack';
import VisitMe from '../VisitMe';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../../../App';
import { RoleTypes } from '../../NavbarTop2';


function CardStructure({ card, pathPage }) {
    const navigate = useNavigate();
    const [likeStatus, setLikeStatus] = useState(false);
    const { setLoader, roleType, user, cards, setCards } = useContext(GeneralContext);

    useEffect(() => {
        console.log("בדיקת מצב")
    }, [likeStatus, setLikeStatus])

    const likedCard = (id) => {
        fetch(`https://api.shipap.co.il/cards/${id}/favorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
            .then(() => {
                cards.filter(c => c.id === id ? c.favorite === true : '');
                setLikeStatus(true);
                console.log(likeStatus);
                console.log("נוסף כרטיס מועדף");
            });
    }

    const unLikeCard = (id) => {
        fetch(`https://api.shipap.co.il/cards/${id}/unfavorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
            .then(() => {
                setLikeStatus(false);
                cards.filter(c => c.id === id ? c.favorite === false : '');
                console.log(likeStatus);
                console.log(" הוסר כרטיס זה ");
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
                        {card.favorite === true ? 'true' : 'false'}
                    </Card.Text>
                    <Card.Text>
                        {card.city} , {card.street} {card.houseNumber}
                    </Card.Text>

                    <div onClick={() => navigate(`/cards/${card.id}`)}>
                        <VisitMe />
                    </div>


                    <Stack direction="horizontal" gap={2} className='IconFrame' >
                        {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business) || (roleType === RoleTypes.user) ?
                            <Card.Link onClick={likeStatus === true ? () => unLikeCard(card.id) : () => likedCard(card.id)} className="p-2 ms-auto cardLink ">
                                {(likeStatus === true || card.favorite === true) ?
                                    <AiFillHeart />
                                    :
                                    <AiOutlineHeart />
                                }


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
            </Card >
        </>

    );
}

export default CardStructure;
