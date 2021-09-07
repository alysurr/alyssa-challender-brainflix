import '../../App.scss';
import React, { Component } from 'react';
import Video from '../../components/Video/Video.jsx';
import Info from '../../components/Info/Info.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { API_URL } from '../../utils';
import axios from 'axios';

class HomePage extends Component  {
  
  // Set Default State
  state = {
    videoList: [],
    selectedVideo: null
  }

  // Grab video details with given videoId
  getVideoDetails = (id) => {
    axios
      .get(`${API_URL}videoDetails/${id}`)
      .then(response => {
        this.setState({
          selectedVideo: response.data
        });
      })
  }

  componentDidMount() {
    document.title = "BrainFlix";
    // Grab videoId from URL
    const currentVideoId = this.props.match.params.id;
    // Call to grab video list from API
    axios
      .get(`${API_URL}videoList`) 
      .then(response => {
        this.setState({
          videoList: response.data
        });

        // Assign Default Video
        const defaultVideo = response.data[0];

        // Check ID
        const videoLoad = currentVideoId ? currentVideoId : defaultVideo.id;
        
        // Call function to grab video details
        this.getVideoDetails(videoLoad);
      });
  }

  componentDidUpdate(prevProps) {
    document.title = "BrainFlix | Video";

    // Compare ID to only make update request on url change
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVideoDetails(this.props.match.params.id);
      window.scrollTo(0, 0);
    }
  }

  render() {
    // Show Loading... when the value is still null
    if(!this.state.selectedVideo){
            return <h2>Loading...</h2>;
    }
    
    // Filter currently shown video from sidebar
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
