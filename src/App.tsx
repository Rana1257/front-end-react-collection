import React from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.less';
import './App.less';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-link">Front end Collections</h1>
        <h3>A JavaScript library for building user interfaces</h3>
        <Button
          type="primary"
          size="large">Get Start</Button>
      </div>
    )
  }
}

export default App;
