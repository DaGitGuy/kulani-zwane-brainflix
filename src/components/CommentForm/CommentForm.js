import './CommentForm.scss';
import { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

class CommentForm extends Component {
  state = {
    comment: "",
    focus: false,
    blur: false
  }
  
  onFocus = () => {
    this.setState({
      focus: true,
      blur: false
    })
  }

  onBlur = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      focus: false,
      blur: true
    })
  }

  getClass = () => {
    if (this.state.focus && !this.state.blur) {
      return "active-state"
    } else if (this.state.blur && this.state.comment.trim().length === 0) {
      return "error-state"
    } else {
      return ""
    }
  }

  render() {

    const addClass = this.getClass();

    return (
      <section className='comment-form'>
          <div className='comment-form-content'>
              <Avatar className='comment-form-content__avatar' use='avatar-mohan' bio='Mohan Muruge'/>
              <form className='comment-form-content__form' id='commentForm'>
                  <div className='comment-form-subcontainer'>
                    <label htmlFor='comment'>Join the Conversation</label>
                    <textarea className={addClass} onFocus={this.onFocus} onBlur={this.onBlur} id='comment' name='comment' placeholder='Add a new comment'></textarea>
                  </div>
                  
                  <Button className='comment-form-button' use='button-comment' purpose='Comment' />
              </form>
          </div>
      </section>
    );
  }
};

export default CommentForm;