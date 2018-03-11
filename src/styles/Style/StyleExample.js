import BaseStyle from './BaseStyle'

class StyleExample extends BaseStyle {
  // constructor() {
  //   super()
  //   // Custom Style
  //   this.size = value => this.width(value).height(value)
  //   this.circle = value => this.width(value).height(value).borderRadius(value / 2)
  // }

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