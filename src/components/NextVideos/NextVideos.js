import './NextVideos.scss';
import NextVideosItem from '../NextVideosItem/NextVideosItem';

const NextVideos = ({ videosData }) => {
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
              />
            )
        })}
    </section>
  );
};

export default NextVideos;