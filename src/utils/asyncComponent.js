import React from 'react';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;

export function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const {default: component} = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <Spin indicator={antIcon} />;
    }
  }
  return AsyncComponent;
}
