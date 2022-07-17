import './UploadPage.scss';
import { Component } from 'react';
import uploadPreview from '../../assets/images/Upload-video-preview.jpg'; 
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL_BACKUP;

class UploadPage extends Component {
  state = {
    videoTitle: "", 
    videoDescription: "",
    focus1: false,
    focus2: false,
    blur1: false,
    blur2: false
  }
  
  onFocus1 = () => {
    this.setState({
      focus1: true,
      blur1: false
    })
  }

  onFocus2 = () => {
    this.setState({
      focus2: true,
      blur2: false
    })
  }

  onBlur1 = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      focus1: false,
      blur1: true
    })
  }

  onBlur2 = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      focus2: false,
      blur2: true
    })
  }

  getClass1 = () => {
    if (this.state.focus1 && !this.state.blur1) {
      return "active-state"
    } else if (this.state.blur1 && this.state.videoTitle.trim().length === 0) {
      return "error-state"
    } else {
      return ""
    }
  }

  getClass2 = () => {
    if (this.state.focus2 && !this.state.blur2) {
      return "active-state"
    } else if (this.state.blur2 && this.state.videoDescription.trim().length === 0) {
      return "error-state"
    } else {
      return ""
    }
  }

  uploadVideo = (e) => {
    e.preventDefault();
    console.log(e);

    if (this.state.videoTitle.trim().length === 0 || this.state.videoDescription.trim().length === 0) {
      alert('Video upload failed!\nPlease enter a title and description for your video.');  
    } else {

      const videoObject = {
        title: this.state.videoTitle, 
        channel: 'BrainStation',
        image: `${SERVER_URL}/images/Upload-video-preview.jpg`,  
        description: this.state.videoDescription, 
        views: '2', 
        likes: '2', 
        duration: '4:16', 
        video: 'https://project-2-api.herokuapp.com/stream',
        id: uuid()
      };

      const videoObjectJsonString = JSON.stringify(videoObject);

      const headers = {
        'Content-Type': 'application/json'  
      };

      axios.post(`${SERVER_URL}/videos`, videoObjectJsonString, {
        headers: headers
      })
        .then((response) => {
          console.log(response.data);
          alert('Video upload successful.\nHappy streaming!');
          e.target.form.reset();
          setTimeout(() => {this.props.history.push(`/video/${response.data.id}`)}, 1200);
        })
        .catch((error) => {
          console.log("Couldn't post a video: ", error);
          alert(`Video upload failed!\n${error.message}`); 
        });
        
    }
  }

  render() {
    const addClass1 = this.getClass1();
    const addClass2 = this.getClass2();

    return (
      <>
        <section className='upload-page'>
          <h1 className='upload-page__title'>Upload Video</h1>
          <div className='upload-page__container'>
            <div className='upload-page-thumbnail'>
              <label htmlFor='uploadPageThumbnail'>Video Thumbnail</label>
              <img className='upload-page-thumbnail__preview' id='uploadPageThumbnail' src={uploadPreview} alt=''/>
            </div>
            <form className='upload-page-form' id="uploadPageForm">
              <label htmlFor='videoTitle'>Title Your Video</label>
              <input className={addClass1} onFocus={this.onFocus1} onBlur={this.onBlur1} type='text' id='videoTitle' name='videoTitle' placeholder='Add a title to your video'/>
  
              <label htmlFor='videoDescription'>Add a Video Description</label>
              <textarea className={addClass2} onFocus={this.onFocus2} onBlur={this.onBlur2} id='videoDescription' name='videoDescription' placeholder='Add a description to your video'></textarea>

              <div className='upload-page-form__buttons'>
                <div className='cancelButton1'>Cancel</div>
                <button onClick={this.uploadVideo} className='publishButton' type='submit'>Publish</button>
                <div className='cancelButton2'>Cancel</div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
};

export default UploadPage;