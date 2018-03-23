import _ from 'lodash'
import { GlobalStyle, Button } from '../../styles'

class Style extends GlobalStyle {
  btnView(type, color, size) {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: type === 'outline' || type === 'flat' ? 'transparent' : _.get(Button.Background, color.toUpperCase(), color),
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderColor: _.get(Button.Text, color.toUpperCase(), color),
      borderWidth: type === 'outline' ? 1 : 0,
      ...this.circle(size),
    }
  }
  btnTextIcon = (color) => ({
    color: _.get(Button.Text, color.toUpperCase(), color)
  })
}

export default new Style()

