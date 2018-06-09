
import { GlobalStyle } from '../../styles'

const BG_COLOR = '#97CAE5'

class Style extends GlobalStyle {
  bgContainer = {
    flex: 1,
    ...this.center,
    backgroundColor: BG_COLOR,
  }
  flexCenter = {
    flex: 1,
    ...this.center,
  }
  flexTab = {
    flex: 1,
    alignItems: 'center',
  }
  animationImg1 = (value, opacity, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius) => ({
    ...this.size(value),
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    backgroundColor: 'transparent',
    opacity,
    overflow: 'hidden'
  })
  floatingImage = {
    position: 'absolute',
    ...this.center,
    top: 80,
    left: 0,
    right: 0,
  }

  imgStack = (opacity, zIndex) => ({
    position: 'absolute',
    opacity,
    zIndex
  })
}

export default new Style()
