import { GlobalStyle } from '../../../styles'
import { Colors } from '../../../styles/Theme'

class Style extends GlobalStyle {
  textAlert = {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DANGER,
  }
  styleFloatingBtn = {
    position: 'absolute', 
    right: 20,
    bottom: 20,
  }
  container = {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  }
  title = {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  }
  buttonText = {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
  button = {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}

export default new Style()