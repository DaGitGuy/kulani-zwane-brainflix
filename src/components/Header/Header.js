import './Header.scss';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import brainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';


const Header = () => {
  return (
    <header className='header'>
        <img className='header__logo' src={brainFlixLogo} alt='BrainFlix logo'></img>
        <div>
          <div className='header__search'>
            <SearchBar />
            <Avatar className='header__avatar' use='avatar-mohan' bio='Mohan Muruge' />
          </div>
          <Button className='header__button' use='button-upload' purpose='Upload' />
          <Avatar className='header__avatar-2' use='avatar-mohan' bio='Mohan Muruge' />
        </div>
        
    </header>
  );
};

export default Header;