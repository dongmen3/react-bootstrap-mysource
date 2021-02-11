import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
