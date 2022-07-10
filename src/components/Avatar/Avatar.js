import './Avatar.scss';
import mohan from '../../assets/images/Mohan-muruge.jpg';

const Avatar = ({ use, bio }) => {

  if (bio === 'Mohan Muruge') {
    return (
      <img className={use} src={mohan} alt={bio}/>
    )
  } else {
    return (
      <img className={use} alt={bio}/>
    )
  } 
};

export default Avatar;