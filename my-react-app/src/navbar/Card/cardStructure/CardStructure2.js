// // import './Cards.css';
// import './CardStructure.css';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import { BiSolidEditAlt } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { FaCheck } from "react-icons/fa";
// import Stack from 'react-bootstrap/Stack';
// import VisitMe from '../VisitMe';
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';
// import { GeneralContext } from '../../../App';
// import { RoleTypes } from '../../NavbarTop2';


// function CardStructure({ card }) {
//     const navigate = useNavigate();
//     const { setLoader, roleType, user, cards, setCards, likeStatus, setLikeStatus } = useContext(GeneralContext);


//     const likedCard = (id) => {
//         fetch(`https://api.shipap.co.il/cards/${id}/favorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
//             credentials: 'include',
//             method: 'PUT',
//         })
//             .then(() => {
//                 console.log("נוסף כרטיס מועדף");
//                 cards.filter(c => c.id === id ? c.favorite === true : '');
//                 setLikeStatus(true);
//             });
//     }

//     const unLikeCard = (id) => {
//         fetch(`https://api.shipap.co.il/cards/${id}/unfavorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
//             credentials: 'include',
//             method: 'PUT',
//         })
//             .then(() => {
//                 console.log(" הוסר כרטיס זה ");
//                 cards.filter(c => c.id === id ? c.favorite === false : '');
//                 setLikeStatus(false);
//             });
//     }

//     return (
//         <>
//             <Card style={{ padding: '0' }} className="cardFrame">
//                 <Card.Img variant="top" src={card.imgUrl} alt={card.imgAlt} />
//                 <Card.Body>
//                     <Card.Title>{card.title}</Card.Title>
//                     <Card.Text>
//                         {card.description}
//                     </Card.Text>
//                     <Card.Text>
//                         {card.city} , {card.street} {card.houseNumber}
//                     </Card.Text>

//                     <div onClick={() => navigate(`/cards/${card.id}`)}>
//                         <VisitMe />
//                     </div>


//                     <Stack direction="horizontal" gap={2} className='IconFrame' >
//                         {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business) || (roleType === RoleTypes.user) ?
//                             <Card.Link onClick={likeStatus ? () => unLikeCard(card.id) : () => likedCard(card.id)} className="p-2 ms-auto cardLink ">
//                                 {(likeStatus === true || card.favorite === true) ?
//                                     <FaCheck />
//                                     :
//                                     <AiOutlineHeart />
//                                 }


//                             </Card.Link>
//                             : ''
//                         }

//                         {(roleType === RoleTypes.business && card.clientId === user.id) ?
//                             <Card.Link href="#" className="p-2 cardLink">
//                                 <BiSolidEditAlt />
//                             </Card.Link >
//                             : ''
//                         }

//                         {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business && card.clientId === user.id) ?
//                             <Card.Link href="#" className="p-2 cardLink">
//                                 <MdDelete />
//                             </Card.Link>
//                             : ''
//                         }
//                     </Stack>
//                 </Card.Body>
//             </Card >
//         </>

//     );
// }

// export default CardStructure;



// import './CardStructure.css';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import { BiSolidEditAlt } from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { FaCheck } from "react-icons/fa";
// import Stack from 'react-bootstrap/Stack';
// import VisitMe from '../VisitMe';
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';
// import { GeneralContext } from '../../../App';
// import { RoleTypes } from '../../NavbarTop2';
// import { CardsContext } from '../Cards';

// function CardStructure({ card }) {
//     const navigate = useNavigate();
//     // const [likeStatus, setLikeStatus] = useState(false);
//     const { setLoader, roleType, user, cards, setCards } = useContext(GeneralContext);
//     // const { likeStatus, setLikeStatus } = useContext(CardsContext);


//     const likedCard = (id) => {

//         fetch(`https://api.shipap.co.il/cards/${id}/favorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
//             credentials: 'include',
//             method: 'PUT',
//         })
//             .then(() => {
//                 console.log("נוסף כרטיס מועדף");
//                 cards.filter(c => c.id === id ? c.favorite === true : '');
//                 setLikeStatus(true);

//                 // setLike([...like, id]);
//                 // console.log(like);

//             });
//     }

//     const unLikeCard = (id) => {
//         fetch(`https://api.shipap.co.il/cards/${id}/unfavorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
//             credentials: 'include',
//             method: 'PUT',
//         })
//             .then(() => {
//                 console.log(" הוסר כרטיס זה ");
//                 cards.filter(c => c.id === id ? c.favorite === false : '');
//                 setLikeStatus(false);
//                 // const unLikeIdIndex = like.findIndex(l => l === id);
//                 // setLike(like.splice(unLikeIdIndex, 1));
//                 // console.log(like);
//             });
//     }


//     // {!likeStatus ? () => likedCard(card.id) : () => unLikeCard(card.id)}


//     // <AiOutlineHeart className={likeStatus ? 'liked' : 'unlike'} />


//     return (
//         <>
//             <Card style={{ padding: '0' }} className="cardFrame">
//                 <Card.Img variant="top" src={card.imgUrl} alt={card.imgAlt} />
//                 <Card.Body>
//                     <Card.Title>{card.title}</Card.Title>
//                     <Card.Text>
//                         {card.description}
//                     </Card.Text>
//                     <Card.Text>
//                         {card.city} , {card.street} {card.houseNumber}
//                     </Card.Text>

//                     <div onClick={() => navigate(`/cards/${card.id}`)}>
//                         <VisitMe />
//                     </div>


//                     <Stack direction="horizontal" gap={2} className='IconFrame' >
//                         {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business) || (roleType === RoleTypes.user) ?
//                             <Card.Link onClick={() => likeStatus ? unLikeCard(card.id) : likedCard(card.id)} className="p-2 ms-auto cardLink ">
//                                 {likeStatus ?
//                                     <FaCheck />
//                                     :
//                                     <AiOutlineHeart />
//                                 }
//                             </Card.Link>
//                             : ''
//                         }

//                         {(roleType === RoleTypes.business && card.clientId === user.id) ?
//                             <Card.Link href="#" className="p-2 cardLink">
//                                 <BiSolidEditAlt />
//                             </Card.Link >
//                             : ''
//                         }

//                         {(roleType === RoleTypes.admin) || (roleType === RoleTypes.business && card.clientId === user.id) ?
//                             <Card.Link href="#" className="p-2 cardLink">
//                                 <MdDelete />
//                             </Card.Link>
//                             : ''
//                         }
//                     </Stack>
//                 </Card.Body>
//             </Card >
//         </>

//     );
// }

// export default CardStructure;