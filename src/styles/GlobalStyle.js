import BaseStyle from './Style/BaseStyle'

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

  fontBold = (size, color) => ({
    fontSize: size,
    color,
    fontWeight: 'bold',
  })

  fontRegular = (size, color) => ({
    fontSize: size,
    color,
  })
}

export default GlobalStyle