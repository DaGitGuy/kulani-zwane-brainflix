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
                <div className='next-videos-image-container'>
                    <img className='next-videos-image-container__image' src={poster} alt=''/>
                </div>
                
                <div className='next-videos-text-container'>
                    <h3 className='next-videos-text-container__title'>{title}</h3>
                    <p className='next-videos-text-container__channel'>{channel}</p>
                </div>
            </a>
        </li>
    );
};

export default NextVideosItem;