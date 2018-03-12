import BaseStyle from './BaseStyle'

class StyleExample extends BaseStyle {
  // Custom style
  size(value) {
    return this
      .width(value)
      .height(value)
  }

  circle(value) {
    return this
      .width(value)
      .height(value)
      .borderRadius(value / 2)
  }
}

export default new StyleExample()