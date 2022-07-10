import './CommentForm.scss';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

const CommentForm = () => {
  return (
    <section className='comment-form'>
        <div className='comment-form-content'>
            <Avatar />
            <form className='comment-form-content__form' id='commentForm'>
                <label>Join the Conversation</label>
                <textarea id='comment' name='comment' placeholder='Add a new comment'></textarea>
                <Button use='comment-button' purpose='Comment' />
            </form>
        </div>
    </section>
  );
};

export default CommentForm;