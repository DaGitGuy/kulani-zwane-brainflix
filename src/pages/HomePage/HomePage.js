import './HomePage.scss';
import { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL_BACKUP;

class HomePage extends Component {
  state = {
    videos: [],
    currentVideo: {},
    focus: false
  };

  getVideo = (id) => {
    axios.get(`${SERVER_URL}/videos/${id}`)
      .then((response) => {
        this.setState({
          currentVideo: response.data
        })    
      })
      .catch((error) => {
        console.log("Couldn't fetch a video: ", error)
      });
  };

  componentDidMount() {
    axios.get(`${SERVER_URL}/videos/`)
      .then((response) => {
        this.setState({
          videos: response.data
        })
        const getVideoId = this.props.match.params.videoId || response.data[0].id;
        this.getVideo(getVideoId);
      })
      .catch((error) => {
        console.log("Couldn't fetch videos: ", error)
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      const getVideoId = this.props.match.params.videoId || this.state.videos[0].id;
      this.getVideo(getVideoId);
    }
  };

  render() {
    const filteredVideos = this.state.videos.filter(video => video.id !== this.state.currentVideo.id);

    return (
      <>
        {this.state.currentVideo.id &&
          <>
            <VideoPlayer 
              selectedVideo={this.state.currentVideo}
            />
            <div className='home-page-subcontainer'>
              <CurrentVideo
                selectedVideo={this.state.currentVideo}
              />
              <NextVideos 
                videosData={filteredVideos}
              />
            </div>
          </>
        }
      </>
    );
  }
}

export default HomePage;
