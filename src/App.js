import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div class='parallax'>
  <div id='stars1'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>

        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
      </div>
      
    );
  }
}

export default App;