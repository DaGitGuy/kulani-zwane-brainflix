import './CurrentVideo.scss';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';

const CurrentVideo = (props) => {
  return (
    <section className='current-video'>
      <video className='current-video__player' controls poster={props.selectedVideo.image}>
      </video>
      <h1>{props.selectedVideo.title}</h1>
      <div>
        <div>
          <p>By {props.selectedVideo.channel}</p>
          <p>{props.selectedVideo.timestamp}</p>
        </div>

        <div>
          <p className='current-video__views'>{props.selectedVideo.views}</p>
          <p className='current-video__likes'>{props.selectedVideo.likes}</p>
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
  );
};

export default CurrentVideo;