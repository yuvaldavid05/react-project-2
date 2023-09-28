import './MyCards.css';
import { useEffect, useState } from "react";
import CardStructure from "../Card/cardStructure/CardStructure";
import Row from 'react-bootstrap/Row';


function MyCards() {
    const [myCards, setMyCards] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/business/cards?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setMyCards(data);
            });
    }, [])
    return (
        <div className="mycardFrame">
            <h2>הכרטיסים שלי:</h2>
            <Row xs={1} md={5} className="g-4 frameGrid">

                {myCards.map((mycardone) => (
                    <CardStructure key={mycardone.id} card={mycardone} />
                ))}
            </Row>
        </div>
    );
}

export default MyCards;