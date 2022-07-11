import './VideoPlayer.scss';

const VideoPlayer = ({ selectedVideo }) => {
  const { image } = selectedVideo; 

  return (
    <div className='video-player-container'>
        <video className='video-player' controls poster={image}></video>
    </div> 
  )
}

export default VideoPlayer;