import './HomePage.scss';
import { Component } from 'react';
import { API_URL } from '../../utils';
import { API_KEY } from '../../utils';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';


class HomePage extends Component {
  state = {
    videos: [],
    currentVideo: {}
  };

  getVideo = (id) => {
    axios.get(`${API_URL}/videos/${id}?api_key=${API_KEY}`)
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
    axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
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
        <Header />
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
    );
  }
}

export default HomePage;
