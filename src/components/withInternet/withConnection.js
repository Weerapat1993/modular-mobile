import React, { Component } from 'react'
import { shape, bool } from 'prop-types'
import { NetInfo } from 'react-native'

export const withConnection = ComposedComponent => {
  return class HOC extends Component {
    constructor() {
      super();
      this.state = {
        isConnected: false,
      };
      this.handleIsConnected = this.handleIsConnected.bind(this);
    }

    componentDidMount() {
      NetInfo.isConnected.fetch().then(isConnected => {
        this.handleIsConnected(isConnected);
      });
      NetInfo.isConnected.addEventListener(
        'change',
        this.handleIsConnected
      );
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        'change',
        this.handleIsConnected
      );
    }

    handleIsConnected(isConnected) {
      this.setState({ isConnected: !isConnected });
    }

    render() {
      const { isConnected } = this.state
      return (
        <ComposedComponent {...this.props} connection={{ isConnected: !isConnected }} />
      );
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const connectionShape = shape({
  isConnected: bool.isRequired
})

