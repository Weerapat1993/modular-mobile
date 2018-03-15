import BaseStyle from './Style/BaseStyle2'

class GlobalStyle extends BaseStyle {
  size = (value) => ({
    width: value,
    height: value
  })

  circle(value) {
    return {
      ...this.size(value),
      borderRadius: value / 2,
    }
  }
}

export default GlobalStyle