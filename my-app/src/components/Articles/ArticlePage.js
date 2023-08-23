import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ErrorPage from '../Navbar/ErrorPage/ErrorPage';


export default function ArticlePage() {
    const [article, setArticle] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${id}`)
            .then(res => res.json())
            .then(data => setArticle(data))
            .catch(() => setError(true));
    }, [])

    return (
        <div className="ArticlePage">
            {
                article ?
                    <div className="article">
                        <h3>{article.headline}</h3>
                        <p>{article.description}</p>
                        <img src={article.imgUrl} width="100%" />
                        <p>{article.content}</p>
                    </div>
                    :
                    (error ? <ErrorPage /> : <p className="article">טוען..</p>)
            }

        </div>
    )
}