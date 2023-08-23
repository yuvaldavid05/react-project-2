import { useEffect, useState } from "react";
import Card from "./Card";


export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div className="Articles">
            {

                articles.map(art =>
                    <Card key={art.id} article={art} />
                )
            }

        </div>
    );
}
