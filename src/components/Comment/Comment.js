import './Comment.scss';
import Avatar from '../Avatar/Avatar';


const Comment = ({ name, date, comment }) => {
  return (
    <article className='comment'>
        <Avatar className='comment__avatar' use='avatar-placeholder' bio='' />
        <div>
            <div className='comment-name-date'>
                <p className='comment-name-date__name'>{name}</p>
                <p className='comment-name-date__date'>{date}</p>
            </div>
            <p className='comment-description'>{comment}</p>
        </div>
    </article>
  );
};

export default Comment;