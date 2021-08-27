import '../../App.scss';
import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import Video from '../../components/Video/Video.jsx';
import Info from '../../components/Info/Info.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import videosData from '../../data/videos.json';
import videosDetails from '../../data/video-details.json';



class HomePage extends Component  {
  
  state = {
    videos: videosData,
    selectedVideo: videosData[0],
    details: videosDetails,
    selectedDetails: videosDetails[0]
  }

  changeVideo = (id) => {
    let newVideo = this.state.videos.find(video => video.id === id)
    let newDetails = this.state.details.find(detail => detail.id === id)

    this.setState({
      selectedVideo: newVideo,
      selectedDetails: newDetails
    })
  }

  render() {
    return (
      <>
      <Header />
      <Video video={this.state.selectedVideo}/>
      <div className="container">
        <div className="container--left">
          <Info video={this.state.selectedVideo} detail={this.state.selectedDetails}/>
          <Comments video={this.state.selectedVideo} detail={this.state.selectedDetails}/>
        </div>
        <div className="container--right">
          <Sidebar
            videos={this.state.videos.filter(video => this.state.selectedVideo.id !== video.id)}
            handleClick={this.changeVideo} />
        </div>
      </div>
      </>
    );
  }
}

export default HomePage;
