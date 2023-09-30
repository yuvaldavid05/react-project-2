import './Cards.css';
import Row from 'react-bootstrap/Row';
import React, { useContext, useEffect } from 'react';
import CardStructure from './cardStructure/CardStructure';
import { Link } from 'react-router-dom';
import { GeneralContext } from '../../App';
import { RoleTypes } from '../../NavbarTop/NavbarTop';
import { search } from '../../NavbarTop/Searchbar';

function Cards() {
    const { setLoader, roleType, cards, setCards, searchWord } = useContext(GeneralContext);

    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setCards(data);
            }).finally(() => setLoader(false))
    }, []);

    return (
        <>
            <h1>מרכז העסקים שלי</h1>
            <Row xs={1} md={5} className="g-4 frameGrid">
                {cards.filter(c => search(searchWord, c.title, c.description, c.subtitle, c.city, c.street)).map(c => (
                    <CardStructure key={c.id} card={c} pathPage={'/'} />
                ))}

            </Row>

            {roleType === RoleTypes.business &&
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