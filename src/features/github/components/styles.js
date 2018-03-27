import { GlobalStyle } from '../../../styles'
import { Colors } from '../../../styles/Theme'

class Style extends GlobalStyle {
  textAlert = {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DANGER,
  }
}

export default new Style()