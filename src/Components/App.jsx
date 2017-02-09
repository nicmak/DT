import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './NavBar/NavBar'
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../Styles/App.css';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section className="mainLayout">
        <NavBar className="NavBar"/>
        {this.props.children}
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;