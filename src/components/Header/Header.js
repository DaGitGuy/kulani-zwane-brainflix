import './Header.scss';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import UploadButton from '../UploadButton/UploadButton';
import brainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';


const Header = () => {
  return (
    <header>
        <img src={brainFlixLogo} alt='BrainFlix logo'></img>
        <SearchBar />
        <Avatar />
        <UploadButton />
    </header>
  );
};

export default Header;