import { GlobalStyle } from '../../../styles'
import { Theme } from '../../../config/theme'

class Style extends GlobalStyle {
  textAlert = {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.Button.Text.danger,
  }
}

export default new Style()