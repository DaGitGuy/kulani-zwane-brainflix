import './CurrentVideo.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';

const CurrentVideo = (props) => {
  return (
    <>
      <div>
        <video className='current-video' controls poster={props.selectedVideo.image}>
        </video>
      </div>

      <section className='current-video-info'>
        <h1>{props.selectedVideo.title}</h1>
        <div className='current-video-stats'>
          <div>
            <p>By {props.selectedVideo.channel}</p>
            <p>{props.selectedVideo.timestamp}</p>
          </div>

          <div>
            <p className='current-video-stats__views'>{props.selectedVideo.views}</p>
            <p className='current-video-stats__likes'>{props.selectedVideo.likes}</p>
          </div>
        </div>

        <p>{props.selectedVideo.description}</p>

        <div>
          <p>{props.selectedVideo.comments.length} Comments</p>

          <CommentForm />
          
          {props.selectedVideo.comments.map((comment, i) => {
            return (
              <Comment
              key={i} 
              name={comment.name}
              date={comment.timestamp}
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