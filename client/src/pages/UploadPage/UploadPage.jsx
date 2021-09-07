import '../../App.scss';
import React, { Component } from 'react';
import Upload from '../../components/Upload/Upload.jsx';




class UploadPage extends Component  {
    
  componentDidMount() {
    document.title = "BrainFlix | Upload New Video";
  }

  render() {
    return (
      <>
      <Upload />
      </>
    );
  }
}

export default UploadPage;
