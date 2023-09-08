import { TOKEN } from '../../config';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from '../Navbar/ErrorPage/ErrorPage';


export default function ArticlePage() {
    const [article, setArticle] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${id}?token=${TOKEN}`)
            .then(res => res.json())
            .then(data => setArticle(data))
            .catch(() => setError(true));
    }, []);

    return (
        <div className="ArticlePage">
            {
                article ?
                    <div className="article">
                        <img src={article.imgUrl} width="100%" />

                        <div className="info">
                            <button onClick={() => navigate('/')}>חזרה לדף הראשי</button>
                            <h3>{article.headline}</h3>
                            <p>{article.description}</p>
                            <p>{article.content}</p>
                        </div>
                    </div>
                    :
                    (error ? <ErrorPage /> : <p className="article">טוען..</p>)
            }

        </div>
    )
}