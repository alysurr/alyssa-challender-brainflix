import React, { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

const App = () => {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/upload" component={UploadPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
