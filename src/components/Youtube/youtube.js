import React, {Component} from 'react';
import './youtube.css';

class Youtube extends Component {
    render(){
        return(
            <div className = 'yt'>
                <iframe className = 'ventana' src="https://www.youtube.com/embed/videoseries?list=UUdvWRZTvKIo3BeRDWN7kfAg" frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
}

export default Youtube;