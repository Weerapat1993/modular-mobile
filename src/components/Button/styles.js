import { BaseStyle, Colors } from '../../styles/Style'

export const Theme = {
  Button: {
    Color: {
      default: Colors.WHITE,
      primary: '#09d',
      success: '#0A0',
      danger: '#C33',
      warning: '#FC3',
    },
    Text: {
      default: '#333',
      primary: '#09d',
      success: '#0A0',
      danger: '#C33',
      warning: '#FC3',
    }
  }
}

class Style extends BaseStyle {

  btnView(type, color, rounded, flat) {
    return this
      .alignItems('center')
      .justifyContent('center')
      .backgroundColor(type === 'outline' || type === 'flat' ? 'transparent' : Theme.Button.Color[color])
      .paddingHorizontal(15)
      .paddingVertical(10)
      .borderColor(!flat && Theme.Button.Text[color])
      .borderWidth(type === 'outline' ? 1 : 0)
      .borderRadius(rounded && 50)
  }

  btnText(type, color) {
    return this
      .color(type !== 'primary' || color === 'default' ? Theme.Button.Text[color] : Colors.WHITE)
      .fontSize(16)
  }
}

export default new Style()

