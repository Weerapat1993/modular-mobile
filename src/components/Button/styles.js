import _ from 'lodash'
import { GlobalStyle, Button, Colors } from '../../styles'

class Style extends GlobalStyle {

  btnView = (type, color, rounded) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'outline' || type === 'flat' ? 'transparent' : _.get(Button.Background, color.toUpperCase(), color),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: _.get(Button.Text, color.toUpperCase(), color),
    borderWidth: type === 'outline' ? 1 : 0,
    borderRadius: rounded ? 50 : 0
  })

  btnText = (type, color, textColor) => ({
    color: type !== 'primary' || color === 'default' ? _.get(Button.Text, color.toUpperCase(), textColor || color) : textColor || Colors.WHITE,
    fontSize: 16
  })
}

export default new Style()

