import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

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
    let sidedrawer;
    let backdrop;
    if(this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerclickhandler =  {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '76px'}}>
          <p>Contenido de la página</p>
        </main>
      </div>
    );
  }
}

export default App;
