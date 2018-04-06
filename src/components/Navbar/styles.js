import { GlobalStyle } from '../../styles'
import { Platform } from 'react-native'

class Style extends GlobalStyle {
  navbarView() {
    return {
      ...this.bgPrimary,
      height: Platform.OS === 'android' ? 60 : 80,
      paddingTop: Platform.OS === 'android' ? 0 : 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
    }
  }
  navbarTitle() {
    return {
      ...this.center,
      flex: 1,
    }
  }
}

export default new Style()
