import './CurrentVideo.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import dateConvert from '../../utils';

const CurrentVideo = ({ selectedVideo }) => {
  const { title, channel, image, description, views, likes, timestamp, comments } = selectedVideo; 

  return (
    <>
      <div className='current-video'>
        <video className='current-video__player' controls poster={image}>
        </video>
      </div>

      <section className='current-video-info'>
        <h1>{title}</h1>
        <div className='current-video-stats'>
          <div>
            <p>By {channel}</p>
            <p>{dateConvert(timestamp)}</p>
          </div>

          <div>
            <p className='current-video-stats__views'>{views}</p>
            <p className='current-video-stats__likes'>{likes}</p>
          </div>
        </div>

        <p>{description}</p>

        <div>
          <p>{comments.length} Comments</p>

          <CommentForm />
          
          {comments.map((comment, i) => {
            return (
              <Comment
              key={i} 
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