import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import Content from './Content'
import Clients from './Clients'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import About from './About'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Home'
    };
  }

  _setPage(page){
    this.setState({
      page
    });
  }

  _getPage(){
    const {page} = this.state;
    if(page === 'Home') {
      return <Home />;
    }
    else if(page === 'About') {
      return <About />;
    }
    else if(page === 'Clients') {
      return <Clients />;
    }
    else if(page === 'Services') {
      return <Services />;
    }
    else if(page === 'Contact') {
      return <Contact />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.page === 'Home' ? 'Home' : `Home > ${this.state.page}`}
          </h1>
        </header>
        <SideBar onPageSelect={(page)=>{this._setPage(page)}}/>
        <Content page={this._getPage()}/>
        <footer className="App-footer">
          Chungnam National Univ <code>src/App.js</code>
        </footer>
      </div>
    );
  }
}

export default App;
