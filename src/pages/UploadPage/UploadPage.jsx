import '../../App.scss';
import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import Upload from '../../components/Upload/Upload.jsx';



class UploadPage extends Component  {
  

  render() {
    return (
      <>
      <Header />
      <Upload />
      </>
    );
  }
}

export default UploadPage;
