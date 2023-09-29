import './MyCards.css';
import { useContext, useEffect, useState } from "react";
import CardStructure from "../Card/cardStructure/CardStructure";
import Row from 'react-bootstrap/Row';
import { GeneralContext } from '../../App';
import { search } from '../Searchbar';


function MyCards() {
    const [myCards, setMyCards] = useState([]);
    const { setLoader, searchWord } = useContext(GeneralContext);


    useEffect(() => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/business/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setMyCards(data);
            }).finally(() => setLoader(false));
    }, [])
    return (
        <div className="mycardFrame">
            <h2>הכרטיסים שלי:</h2>
            <Row xs={1} md={5} className="g-4 frameGrid">

                {myCards.filter(c => search(searchWord, c.title, c.description, c.subtitle, c.city, c.street)).map((mycardone) => (
                    <CardStructure key={mycardone.id} card={mycardone} />
                ))}
            </Row>
        </div>
    );
}

export default MyCards;