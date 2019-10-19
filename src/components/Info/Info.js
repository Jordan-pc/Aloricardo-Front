import React from 'react';
import './Info.css';

const Info = props => (
    <footer>
        <div className = 'Box'>
            <div className = 'sec'>
                <h4 className = 'initial'>Aloricardo</h4>
            </div>
            <div className = 'sec'>
                <h4>Ubicación</h4>
                <p className = 'text'>Irarrázaval 1989 oficina 205 norte</p>
            </div>
            <div className = 'sec'>
                <h4>Más información</h4>
                <p className = 'text'>Célular: </p>
                <p className = 'text'> Correo: </p>
            </div>
            <div className = 'sec'>
                <h4>Redes Sociales</h4>
            </div>
        </div>
    </footer>
);

export default Info;