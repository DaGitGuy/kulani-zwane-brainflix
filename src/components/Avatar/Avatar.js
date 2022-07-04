import './Avatar.scss';
import mohan from '../../assets/images/Mohan-muruge.jpg';

const Avatar = () => {
  return (
        <img className='avatar-image' src={mohan} alt='Mohan Muruge'/>
  );
};

export default Avatar;