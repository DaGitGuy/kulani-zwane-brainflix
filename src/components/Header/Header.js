import './Header.scss';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import brainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';


const Header = () => {
  return (
    <header className='header'>
        <img className='header__logo' src={brainFlixLogo} alt='BrainFlix logo'></img>
        <SearchBar />
        <Avatar />
        <Button use='upload-button' purpose='Upload' />
    </header>
  );
};

export default Header;