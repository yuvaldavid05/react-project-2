import { useEffect, useState } from "react";
import Card from "./Card";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";



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
        <>
            <div className='opening'>
                <div className='left'>
                    <h1>אתר העסקים הגדול</h1>
                </div>
                <div className='right'>
                    <HiOutlineCursorArrowRays />
                </div>
            </div>

            <div className="Articles">
                {

                    articles.map(art =>
                        <Card key={art.id} article={art} />
                    )
                }

            </div>
        </>
    );
}
