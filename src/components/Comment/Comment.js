import './Comment.scss';


const Comment = (props) => {
  return (
    <article className='comment'>
        <img className='comment__image' alt='Avatar placeholder'/>
        <div className='comment__text-container'>
            <div className='comment-name-date'>
                <p>{props.name}</p>
                <p>{props.date}</p>
            </div>
            <p>{props.comment}</p>
        </div>
    </article>
  );
};

export default Comment;