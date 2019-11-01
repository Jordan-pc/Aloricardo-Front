import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Youtube from './components/Youtube/youtube';
import Info from './components/Info/Info';
import Slideshow from './components/Slider/Slider'

import './App.css'


class App extends Component {

  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevstate) => {
      return {SideDrawerOpen: !prevstate.SideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };

  render () {
    let backdrop;
    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className = 'App'>
        <div className = 'App-content'>
          <Toolbar drawerclickhandler =  {this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.SideDrawerOpen} />
          {backdrop}
          <Slideshow/>
          <Youtube />
          <main style={{marginTop: '76px'}}>
            <p>Contenido de la página</p>
          </main>
          <main style={{marginTop: '76px'}}>
            <p>Contenido de la página</p>
          </main>
          <main style={{marginTop: '76px'}}>
            <p>Contenido de la página</p>
          </main>
          <main style={{marginTop: '76px'}}>
            <p>Contenido de la página</p>
          </main>
          <main style={{marginTop: '76px'}}>
            <p>Contenido de la página</p>
          </main>
          <main style={{marginTop: '76px'}}>
            <p>Contenido de la página</p>
          </main>

          <Info />
        </div>
      </div>
    );
  }
}

export default App;
