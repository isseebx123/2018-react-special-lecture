import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar'
import Content from './Content'

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

  render() {
    const {page} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.page === 'Home' ? 'Home' : `Home > ${this.state.page}`}
          </h1>
        </header>
        <SideBar onPageSelect={(page)=>{this._setPage(page)}}/>
        <Content page={page} />
        <footer className="App-footer">
          Chungnam National Univ <code>src/App.js</code>
        </footer>
      </div>
    );
  }
}

export default App;
