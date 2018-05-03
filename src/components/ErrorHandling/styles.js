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
  connectionBar = (height, isConnected) => ({
    height,
    backgroundColor: isConnected ? Colors.SUCCESS : Colors.DANGER,
    ...this.center,
    overflow: 'hidden'
  })
}

export default new Style()