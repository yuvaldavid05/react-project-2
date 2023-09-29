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
    const { setLoader, roleType, user, cards, setCards, snackbarOn } = useContext(GeneralContext);

    useEffect(() => {
        setLikeStatus(card.favorite);
    }, [])



    const likedCard = (id) => {
        console.log(likeStatus);
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards/${id}/favorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
            .then(() => {
                cards.filter(c => c.id === id && c.favorite === false ? c.favorite === true : '');
                setLikeStatus(true);
                snackbarOn("כרטיס זה נוסף למועדפים");
            }).finally(() => setLoader(false))

    }

    const unLikeCard = (id) => {
        console.log(likeStatus);
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards/${id}/unfavorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
            .then(() => {
                cards.filter(c => c.id === id && c.favorite === true ? c.favorite === false : '');
                setLikeStatus(false);
                snackbarOn(" כרטיס זה הוסר מהמועדפים ");
                console.log(likeStatus);
            }).finally(() => setLoader(false));
    }

    const deleteCard = (id) => {
        if (!window.confirm("למחוק פריט זה?")) {
            return;
        } else {
            setLoader(true);
            fetch(`https://api.shipap.co.il/business/cards/${id}?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
                credentials: 'include',
                method: 'DELETE',
            })
                .then(() => {
                    setCards(cards.filter(x => x.id !== id));
                    snackbarOn("פריט זה נמחק");
                }).finally(() => setLoader(false))
        }
    }

    // useEffect(() => {
    //     setLoader(true);
    //     fetch(`https://api.shipap.co.il/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
    //         credentials: 'include',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCards(data);
    //         }).finally(() => setLoader(false));
    // }, [])

    return (
        <>
            <Card style={{ padding: '0' }} className="cardFrame">
                <Card.Img variant="top" src={card.imgUrl} alt={card.imgAlt} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.subtitle}
                    </Card.Text>
                    <Card.Text>
                        {card.description}
                    </Card.Text>
                    <Card.Text>
                        {card.city} , {card.street} {card.houseNumber}
                    </Card.Text>

                    <br></br>
                    <div className="divLinkToCardPage" onClick={() => navigate(`/cards/${card.id}`)}>
                        <VisitMe />
                    </div>
                    {/* onClick={likeStatus === true ? () => unLikeCard(card.id) : () => likedCard(card.id)} */}

                    <br></br>
                    <br></br>

                    <Stack direction="horizontal" gap={2} className='IconFrame' >
                        {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business) || (roleType === RoleTypes.user) ?
                            <Card.Link onClick={likeStatus ? () => unLikeCard(card.id) : () => likedCard(card.id)} className="p-2 ms-auto cardLink">
                                {likeStatus || card.favorite ?
                                    <AiFillHeart className='fullHeart' />
                                    :
                                    < AiOutlineHeart />
                                }

                            </Card.Link>
                            : ''
                        }

                        {(roleType === RoleTypes.business && card.clientId === user.id) ?
                            <Card.Link href="#" className="p-2 cardLink">
                                <Link to={`/business/cards/${card.id}`}>
                                    <BiSolidEditAlt />
                                </Link>
                            </Card.Link >
                            : ''}

                        {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business && card.clientId === user.id) ?
                            <Card.Link onClick={() => deleteCard(card.id)} className="p-2 cardLink">
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
