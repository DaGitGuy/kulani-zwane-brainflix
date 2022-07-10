import './Avatar.scss';
import mohan from '../../assets/images/Mohan-muruge.jpg';

const Avatar = (props) => {
  
  if (props.bio === 'Mohan Muruge') {
    return (
      <img className={props.use} src={mohan} alt={props.bio}/>
    )
  } else {
    return (
      <img className={props.use} alt={props.bio}/>
    )
  } 
};

export default Avatar;