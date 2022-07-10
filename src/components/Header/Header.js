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
        <Avatar use='avatar-mohan' bio='Mohan Muruge' />
        <Button use='button-upload' purpose='Upload' />
    </header>
  );
};

export default Header;