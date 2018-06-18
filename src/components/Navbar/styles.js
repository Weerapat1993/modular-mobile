import { GlobalStyle } from '../../styles'
import { Platform } from 'react-native'

class Style extends GlobalStyle {
  navbarView(flat) {
    const line = flat ? this.lineBottom(1) : {}
    return {
      backgroundColor: flat ? this.bgWhite.backgroundColor : this.bgPrimary.backgroundColor,
      height: Platform.OS === 'android' ? 60 : 80,
      paddingTop: Platform.OS === 'android' ? 0 : 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      ...line,
    }
  }
  navbarTitle(description) {
    return {
      ...this.center,
      alignItems: description ? 'flex-start' : 'center',
      marginHorizontal: 15,
      flex: 1,

    }
  }
}

export default new Style()
