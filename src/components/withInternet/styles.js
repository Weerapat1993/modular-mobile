
import { GlobalStyle, Colors } from '../../styles'

class Style extends GlobalStyle {
  connectionBar = (height, isConnected) => ({
    ...this.center,
    height,
    backgroundColor: isConnected ? Colors.SUCCESS : Colors.DANGER,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  })
}

export default new Style()
