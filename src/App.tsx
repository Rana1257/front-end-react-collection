import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const logo = require('./logo.svg') as string;

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='App'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Front end Collections</h1>
        <p className='App-subTitle'>A JavaScript library for building user interfaces</p>
        <Button
          className='App-button'
          type='primary'
          size='large'
        >Get Start
        </Button>
      </div>
    );
  }
}

export default App;
