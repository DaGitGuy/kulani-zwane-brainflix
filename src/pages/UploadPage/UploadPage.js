import React from 'react';
import './UploadPage.scss';
import Header from '../../components/Header/Header';
import uploadPreview from '../../assets/images/Upload-video-preview.jpg'; 

const UploadPage = () => {
  return (
    <>
      <Header />
      <section className='upload-page'>
        <h1 className='upload-page__title'>Upload Video</h1>
        <div>
          <div>
            <label>Video Thumbnail</label>
            <img className='upload-page__preview' src={uploadPreview} alt=''/>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadPage;