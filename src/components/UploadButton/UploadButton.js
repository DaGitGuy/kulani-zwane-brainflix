import './UploadButton.scss';
import uploadIcon from '../../assets/icons/upload.svg';

const UploadButton = () => {
  return (
    <button><img src={uploadIcon} alt='Upload icon'/>Upload</button>
  );
};

export default UploadButton;