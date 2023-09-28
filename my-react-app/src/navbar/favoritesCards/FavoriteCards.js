import { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import CardStructure from "../Card/cardStructure/CardStructure";
import { GeneralContext } from "../../App";


function FavoriteCards() {
    const [favoriteCards, setFavoriteCards] = useState([]);
    const { setLoader, roleType, user, cards, setCards, like, setLike } = useContext(GeneralContext);


    useEffect(() => {
        fetch(`https://api.shipap.co.il/cards/favorite?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setFavoriteCards(data);
            });
    }, [])
    return (
        <div className="favoriteCardsFrame">
            <h2>הכרטיסים המועדפים שלי : </h2>
            <Row xs={1} md={5} className="g-4 frameGrid">

                {favoriteCards.map((favorCards) => (
                    <CardStructure key={favorCards.id} card={favorCards} />
                ))}
            </Row>
        </div>
    );
}

export default FavoriteCards;