import React, { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/upload" component={UploadPage} />
        <Route path="/video/:id" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
