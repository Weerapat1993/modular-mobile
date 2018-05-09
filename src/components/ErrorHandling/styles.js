import { GlobalStyle, Colors } from '../../styles'

class Style extends GlobalStyle {
  container = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  }
  textAlert = {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DANGER,
  }
}

export default new Style()