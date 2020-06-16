import React from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.less';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='App'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Front end Collections</h1>
        <p>A JavaScript library for building user interfaces</p>
        <Button
          type='primary'
          size='large'
        >Get Start
        </Button>
      </div>
    );
  }
}

export default App;
