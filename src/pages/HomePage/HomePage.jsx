import '../../App.scss';
import React, { Component } from 'react';
import Video from '../../components/Video/Video.jsx';
import Info from '../../components/Info/Info.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { API_KEY, API_URL } from '../../utils';
import axios from 'axios';

class HomePage extends Component  {
  
  // Set Default State
  state = {
    videoList: [],
    selectedVideo: null
  }

  //G rab Video Details with given videoId
  getVideoDetails = (videoId) => {
    axios
      .get(`${API_URL}/${videoId}${API_KEY}`)
      .then(response => {
        this.setState({
          selectedVideo: response.data
        });
      })
  }

  componentDidMount() {
    // Grab videoId from URL
    const currentVideoId = this.props.match.params.videoId;

    axios
      .get(`${API_URL}${API_KEY}`) 
      .then(response => {

        this.setState({
          videoList: response.data,
        });
        // Assign Default Video
        const defaultVideo = response.data[0];
        const videoLoad = currentVideoId ? currentVideoId : defaultVideo.id;
        this.getVideoDetails(videoLoad);
      });
  }

  componentDidUpdate(prevProps) {
    if (
            prevProps.match.params.videoId !== this.props.match.params.videoId
        ) {
            this.getVideoDetails(this.props.match.params.videoId);
        }
  }
  render() {
    if(!this.state.selectedVideo){
            return <h2>Loading...</h2>;
    }
    
    const filterCurrentVideo = this.state.selectedVideo
      ? this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)
      : this.state.videoList;

    return ( 
      <>
      <Video video={this.state.selectedVideo}/>
      <div className="container">
        <div className="container--left">
          <Info video={this.state.selectedVideo}/>
          <Comments video={this.state.selectedVideo}/>
        </div>
        <div className="container--right">
          <Sidebar videoList={filterCurrentVideo} />
        </div>
      </div>
      </>
    );
  }
}

export default HomePage;
