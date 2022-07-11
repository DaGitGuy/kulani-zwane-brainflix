import './Avatar.scss';
import mohan from '../../assets/images/Mohan-muruge.jpg';

const Avatar = ({ className, use, bio }) => {

  if (bio === 'Mohan Muruge') {
    return (
      <img className={className+' '+use} src={mohan} alt={bio}/>
    )
  } else {
    return (
      <img className={className+' '+use} alt={bio}/>
    )
  } 
};

export default Avatar;