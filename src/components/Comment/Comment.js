import './Comment.scss';
import Avatar from '../Avatar/Avatar';


const Comment = ({ name, date, comment }) => {
  return (
    <article className='comment'>
        <Avatar use='avatar-placeholder' bio='' />
        <div className='comment__text-container'>
            <div className='comment-name-date'>
                <p>{name}</p>
                <p>{date}</p>
            </div>
            <p className='comment-description'>{comment}</p>
        </div>
    </article>
  );
};

export default Comment;