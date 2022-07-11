import './CommentForm.scss';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

const CommentForm = () => {
  return (
    <section className='comment-form'>
        <div className='comment-form-content'>
            <Avatar className='comment-form-content__avatar' use='avatar-mohan' bio='Mohan Muruge'/>
            <form className='comment-form-content__form' id='commentForm'>
                <div className='comment-form-subcontainer'>
                  <label>Join the Conversation</label>
                  <textarea id='comment' name='comment' placeholder='Add a new comment'></textarea>
                </div>
                
                <Button className='comment-form-button' use='button-comment' purpose='Comment' />
            </form>
        </div>
    </section>
  );
};

export default CommentForm;