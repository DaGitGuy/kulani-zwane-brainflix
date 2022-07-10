import './NextVideos.scss';
import NextVideosItem from '../NextVideosItem/NextVideosItem';

const NextVideos = ({ videosData, onSelectVideo }) => {
  return (
    <section className='next-videos'>
        <h2>Next Videos</h2>

        {videosData.map((video) => {
            return (
                <NextVideosItem 
                    key={video.id}
                    id={video.id}
                    poster={video.image}
                    title={video.title}
                    channel={video.channel}
                    onSelectVideo={onSelectVideo}
                />
            )
        })}
    </section>
  );
};

export default NextVideos;