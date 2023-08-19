import React from 'react';
import './App.css';
import{
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage'
import Addquestion from './components/AddQuestion/Addquestion';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path ="/add-question" component={Addquestion}/>
          <Route exact path ="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
