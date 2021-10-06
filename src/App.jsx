import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import RecentWorks from './components/RecentWorks';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact><AboutMe /></Route>
          <Route path='/works'><RecentWorks></RecentWorks></Route>
        </Switch>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
