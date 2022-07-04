import './CommentForm.scss';
import Avatar from '../Avatar/Avatar';
import addCommentIcon from '../../assets/icons/add_comment.svg';

const CommentForm = () => {
  return (
    <section className='comment-form'>
        <div className='comment-form-content'>
            <Avatar />
            <form className='comment-form-content__form' id='commentForm'>
                <label for='comment'>Join the Conversation</label>
                <textarea id='comment' name='comment' placeholder='Add a new comment'></textarea>
                <button><img src={addCommentIcon} alt='Add comment icon'/>Comment</button>
            </form>
        </div>
    </section>
  );
};

export default CommentForm;