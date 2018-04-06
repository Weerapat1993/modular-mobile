import React, { Component } from 'react'
import { oneOfType, object, array, string } from 'prop-types'
import { Image } from 'react-native'
import { IMAGE_NOT_FOUND } from '../../assets/images'

class LoadImage extends Component {
  static propTypes = {
    style: oneOfType([ array, object ]),
    url: string.isRequired,
  }

  static defaultProps = {
    style: {}
  }

  constructor() {
    super()

    this.state = {
      loading: true,
    }
  }

  getImage(uri) {
    return !uri || this.state.loading  ? IMAGE_NOT_FOUND : { uri }
  }

  render() {
    const { url, style } = this.props
    return (
      <Image
        onLoadEnd={() => this.setState({ loading: false })} 
        source={this.getImage(url)} 
        style={style} 
      />
    )
  }
}


export default LoadImage