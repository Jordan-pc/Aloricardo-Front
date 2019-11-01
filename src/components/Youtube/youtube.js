import React from 'react';
import './youtube.css';


const Youtube = props => (
    <div className = 'yt'>
        <iframe title = 'yt_frame' className = 'ventana' src="https://www.youtube.com/embed/videoseries?list=UUdvWRZTvKIo3BeRDWN7kfAg" frameBorder="0" allowFullScreen>Video</iframe>
    </div>
);

export default Youtube;