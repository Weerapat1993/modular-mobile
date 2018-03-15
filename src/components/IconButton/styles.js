import _ from 'lodash'
import { GlobalStyle } from '../../styles'
import { Theme } from '../../config/theme'

class Style extends GlobalStyle {
  btnView = (type, color, size) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'outline' || type === 'flat' ? 'transparent' : _.get(Theme.Button.Color, color, color),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: _.get(Theme.Button.Text, color, color),
    borderWidth: type === 'outline' ? 1 : 0,
    width: size,
    height: size,
    borderRadius: size / 2
  })
}

export default new Style()

