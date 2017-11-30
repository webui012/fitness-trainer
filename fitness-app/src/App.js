import React, { Component } from 'react';
import styles from './App.scss';
import webpackLogo from './images/index.png';
import PropsTest from './PropsTest';

class App extends Component {

  state = {
    buttonActive: true,
  };

  render() {
    return (
      <div className={styles.App}>
        <h1>App</h1>
        <button type='button' style={
            this.state.buttonActive ? { background: 'red' } : { background: 'green' }
        } onClick={this.changeState}>Click</button>
        <img src={webpackLogo} alt='' />
        <PropsTest
            name='First App'
            fast='gh'/>
      </div>
    );
  }

  changeState = () => this.setState({ buttonActive: !this.state.buttonActive });
}

export default App;
