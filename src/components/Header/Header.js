import './Header.scss';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import brainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';


const Header = () => {
  return (
    <header className='header'>
        <Link to='/'>
          <img className='header__logo' src={brainFlixLogo} alt='BrainFlix logo'></img>
        </Link>
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