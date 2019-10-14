import React, {Component} from 'react';
import './youtube.css';

class Youtube extends Component {
    render(){
        return(
            <div className = 'yt'>
                <iframe className = 'ventana' src="https://www.youtube.com/embed/LqfJeokhLYc" frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
}

export default Youtube;