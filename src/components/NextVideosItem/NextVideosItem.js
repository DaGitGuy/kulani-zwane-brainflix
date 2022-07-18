import './NextVideosItem.scss';
import { Link } from 'react-router-dom';

const NextVideosItem = ({ id, poster, title, channel }) => {
    return (
        <li className='next-videos-item'>
            <Link to={`/videos/${id}`}>
                <div className='next-videos-image-container'>
                    <img className='next-videos-image-container__image' src={poster} alt=''/>
                </div>
                
                <div className='next-videos-text-container'>
                    <h3 className='next-videos-text-container__title'>{title}</h3>
                    <p className='next-videos-text-container__channel'>{channel}</p>
                </div>
            </Link>
        </li>
    );
};

export default NextVideosItem;