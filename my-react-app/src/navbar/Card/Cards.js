import './Cards.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import VisitMe from './VisitMe';
import React, { useContext, useEffect, useState } from 'react';
import CardStructure from './cardStructure/CardStructure';
import { Link, useNavigate, useResolvedPath } from 'react-router-dom';
import { GeneralContext } from '../../App';
import { RoleTypes } from '../NavbarTop2';
import { search } from '../Searchbar';

// import CardStructure2 from './cardStructure/CardStructure2';


// export const CardsContext = React.createContext();


function Cards() {
    // const [cards, setCards] = useState([]);
    // const [like, setLike] = useState(0);
    // const [unlike, setUnlike] = useState(0);
    // const [likeStatus, setLikeStatus] = useState(false);
    const navigate = useNavigate();
    const { setLoader, roleType, user, cards, setCards, snackbarOn, searchWord } = useContext(GeneralContext);

    // const pathCard = useResolvedPath().pathname;


    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setCards(data);
                // console.log(like);
                // cards.map(cardchack => cardchack.favorite === true ? setLikeStatus(true) : setLikeStatus(false));

            }).finally(() => setLoader(false))
    }, []);



    // CardsContext.Provider value={{ like, setLike, unlike, setUnlike }}
    // toLocaleLowerCase()
    return (
        <>
            <h1>מרכז העסקים שלי</h1>
            <Row xs={1} md={5} className="g-4 frameGrid">
                {cards.filter(c => search(searchWord, c.title, c.description, c.subtitle, c.city, c.street)).map(c => (
                    <CardStructure key={c.id} card={c} pathPage={'/'} />

                    // <CardStructure2 key={c.id} card={c} status={c.favorite === true ? true : false} />

                ))}

            </Row>

            {((roleType === RoleTypes.admin || roleType === RoleTypes.business)) &&
                <div className='addCardIcon'>
                    <Link to="/business/cards/new">
                        +
                    </Link>
                </div>
            }
        </>



    );
}

export default Cards;