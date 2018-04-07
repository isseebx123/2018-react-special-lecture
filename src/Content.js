import React, {Component} from 'react';
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div clasName="App-content">
                {this.props.page}
            </div>
        );
    }
}

export default Content;