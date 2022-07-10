import './NextVideosItem.scss';

const NextVideosItem = (props) => {
    const handleVideoSelect = (e) => {
        e.preventDefault();

        props.onSelectVideo(props.id);
    }

    return (
        <li className='next-videos-item'>
            <a 
                href='/'
                onClick={handleVideoSelect}
            >
                <img className='next-videos-item__image' src={props.poster} alt=''/>
                {props.title}
                <br></br>
                {props.channel}
            </a>
        </li>
    );
};

export default NextVideosItem;