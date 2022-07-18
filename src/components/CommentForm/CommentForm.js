import './CommentForm.scss';
import { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL_BACKUP;

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

  addComment = (e) => {
    e.preventDefault();
    console.log(e);

    let urlPath = e.view.location.pathname;

    if (e.view.location.pathname === '/') {
      urlPath = '/videos/84e96018-4022-434e-80bf-000ce4cd12b8'; 
    } 

    if (this.state.comment.trim().length === 0) {
      alert('Comment post failed!\nPlease enter a comment.');  
    } else {

      const commentObject = {
        name: 'BrainStation Person',
        comment: this.state.comment 
      };

      const commentObjectJsonString = JSON.stringify(commentObject);

      const headers = {
        'Content-Type': 'application/json'  
      };

      axios.post(`${SERVER_URL}${urlPath}/comments`, commentObjectJsonString, {
        headers: headers
      })
        .then((response) => {
          console.log(response.data);

          alert('Comment post successful.\nPlease refresh page to view your comment.');
          e.target.form.reset();
        })
        .catch((error) => {
          console.log("Couldn't post a comment: ", error);
          alert(`Comment post failed!\n${error.message}`); 
        });
        
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
                  
                  <button onClick={this.addComment} className='comment-form-button' type='submit'>Comment</button>
              </form>
          </div>
      </section>
    );
  }
};

export default CommentForm;