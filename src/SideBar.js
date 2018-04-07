import React, {Component} from 'react';
import logo from './logo.svg';
import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <nav className="App-sidebar">
                <img src={logo} className="App-logo" alt="logo" />
                <a href="#" onClick={() => {this.props.onPageSelect('Home');}} >Home</a>
                <a href="#" onClick={() => {this.props.onPageSelect('About');}} >About</a>
                <a href="#" onClick={() => {this.props.onPageSelect('Services');}}>Services</a>
                <a href="#" onClick={() => {this.props.onPageSelect('Clients');}}>Clients</a>
                <a href="#" onClick={() => {this.props.onPageSelect('Contact');}}>Contact</a>
            </nav>
        );
    }
}

export default SideBar;