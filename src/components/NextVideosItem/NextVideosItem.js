import './NextVideosItem.scss';

const NextVideosItem = (props) => {
    const handleVideoSelect = (e) => {
        e.preventDefault();

        props.onSelectVideo(props.id);
    }

    return (
        <li>
            <a 
                href=''
                onClick={handleVideoSelect}
            >
                <img className='next-videos-item' src={props.poster} alt={props.title} />
                {props.title}
                {props.channel}
            </a>
        </li>
    );
};

export default NextVideosItem;