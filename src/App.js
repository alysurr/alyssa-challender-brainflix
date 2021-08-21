import './App.scss';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Video from './components/Video/Video.jsx';
import Info from './components/Info/Info.jsx';
import Comments from './components/Comments/Comments.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';


class App extends React.Component  {
  
  render() {
    return (
      <>
      <Header />
      <Video />
      <div className="container">
        <div className="container--left">
          <Info />
          <Comments />
        </div>
        <div className="container--right">
          <Sidebar />
        </div>
      </div>
      </>
    );
  }
}

export default App;
