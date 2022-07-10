import './Comment.scss';
import Avatar from '../Avatar/Avatar';


const Comment = (props) => {
  return (
    <article className='comment'>
        <Avatar use='avatar-placeholder' bio='' />
        {/* <img className='comment__image' alt=''/> */}
        <div className='comment__text-container'>
            <div className='comment-name-date'>
                <p>{props.name}</p>
                <p>{props.date}</p>
            </div>
            <p className='comment-description'>{props.comment}</p>
        </div>
    </article>
  );
};

export default Comment;