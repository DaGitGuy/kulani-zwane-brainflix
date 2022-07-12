import './CurrentVideo.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import dateConvert from '../../utils';

const CurrentVideo = ({ selectedVideo }) => {
  const { title, channel, description, views, likes, timestamp, comments } = selectedVideo; 

  return (
    <>
      <section className='current-video-info'>
        <h1 className='current-video-info__title'>{title}</h1>
        <div className='current-video-stats'>
          <div>
            <h3 className='current-video-stats__channel'>By {channel}</h3>
            <p className='current-video-stats__date'>{dateConvert(timestamp)}</p>
          </div>

          <div> 
            <p className='current-video-stats__views'>{views}</p>
            <p className='current-video-stats__likes'>{likes}</p>
          </div>
        </div>

        <p className='current-video-info__description'>{description}</p>

        <div className='current-video-comments'>
          <h3>{comments.length} Comments</h3>

          <CommentForm />
          
          {comments.map((comment) => {
            return (
              <Comment
              key={comment.id} 
              name={comment.name}
              date={dateConvert(comment.timestamp)}
              comment={comment.comment}
              /> 
            )
          })}
        </div> 
      </section>
    </>
  );
};

export default CurrentVideo;