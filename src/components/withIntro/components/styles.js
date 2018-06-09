
import { GlobalStyle } from '../../../styles'

const BG_COLOR = '#fff'

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
    padding: 15,
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
    top: 60,
    left: 0,
    right: 0,
  }
  imgStack = (opacity, zIndex) => ({
    position: 'absolute',
    opacity,
    zIndex
  })
  dotStyle = {
    backgroundColor: 'rgba(0,0,0, 0.2)', 
    ...this.size(8),
    borderRadius: 4,
    margin: 5,
  }
  dotActiveStyle = {
    ...this.bgDefault,
    ...this.size(8),
    borderRadius: 4,
    margin: 5,
  }
}

export default new Style()
