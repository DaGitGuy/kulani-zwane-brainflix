import './NextVideosItem.scss';

const NextVideosItem = ({ id, poster, title, channel, onSelectVideo }) => {
    const handleVideoSelect = (e) => {
        e.preventDefault();

        onSelectVideo(id);
    }

    return (
        <li className='next-videos-item'>
            <a 
                href='/'
                onClick={handleVideoSelect}
            >
                <img className='next-videos-item__image' src={poster} alt=''/>
                {title}
                <br></br>
                {channel}
            </a>
        </li>
    );
};

export default NextVideosItem;