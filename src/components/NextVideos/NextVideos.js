import './NextVideos.scss';
import NextVideosItem from '../NextVideosItem/NextVideosItem';

const NextVideos = (props) => {
  return (
    <section>
        <h2>Next Videos</h2>

        {props.videosData.map((video) => {
            return (
                <NextVideosItem 
                    key={video.id}
                    id={video.id}
                    poster={video.image}
                    title={video.title}
                    channel={video.channel}
                    onSelectVideo={props.onSelectVideo}
                />
            )
        })}
    </section>
  );
};

export default NextVideos;