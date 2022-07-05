import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import NextVideos from './components/NextVideos/NextVideos';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json'; 

class App extends React.Component {
  state = {
    videos: videosData,
    currentVideo: videoDetailsData[0]
  }

  selectVideo = (videoId) => {
    const selectedVideo = videoDetailsData.find(video => video.id === videoId);

    this.setState({
      currentVideo: selectedVideo
    });
  }

  render() {
    const filteredVideos = this.state.videos.filter(video => video.id !== this.state.currentVideo.id);

    return (
      <>
        <Header />
        <CurrentVideo
          selectedVideo={this.state.currentVideo}
        />
        <NextVideos 
          videosData={filteredVideos}
          onSelectVideo={this.selectVideo}
        />
      </>
    );
  }
}

export default App;
