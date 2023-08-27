import { Link, useNavigate } from 'react-router-dom';


export default function Card({ article }) {
    const navigate = useNavigate();

    return (
        <Link to={`/article/${article.id}`}>
            {/* <button Link to={'/'}>חזרה לעסקים..</button> */}
            <div className='card'>
                <div className='card-img' style={{ backgroundImage: `url('${article.imgUrl}')` }}></div>

                <header>{article.headline}</header>
                <footer>{article.description}</footer>
            </div>
        </Link>
    )
}