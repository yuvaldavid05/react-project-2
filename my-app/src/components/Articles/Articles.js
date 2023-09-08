import './Articles.css';
import { TOKEN } from '../../config';
import { useEffect, useState } from "react";
import Card from "./Card";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";



export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles?token=${TOKEN}`)
            .then(res => res.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <>
            <div className="container-fluid p-5 bg-primary text-white text-center ">
                <div className='left'>
                    <h1>אתר העסקים הגדול</h1>
                </div>
                <div className='right'>
                    <HiOutlineCursorArrowRays />
                </div>
            </div>

            <div className="order">

                <select>
                    <option></option>
                    <option>א-ב</option>
                    <option>קטגוריות</option>
                </select>
                סדר לפי
            </div>
            <div className="container mt-5 Articles">
                <div className="row">
                    {

                        articles.map(art =>
                            <Card key={art.id} article={art} />
                        )
                    }
                </div>

            </div>
        </>
    );
}
