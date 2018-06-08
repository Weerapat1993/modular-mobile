
import { GlobalStyle } from '../../styles'

const BG_COLOR = '#97CAE5'

class Style extends GlobalStyle {
  bgContainer = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR,
  }
  flexCenter = {
    flex: 1,
    ...this.center,
  }
  animationImg1 = (value, opacity, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius) => ({
    ...this.size(value),
    backgroundColor: '#fff',
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    opacity,
    overflow: 'hidden'
  })

  bor
}

export default new Style()
