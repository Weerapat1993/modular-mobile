import { GlobalStyle } from '../../../styles'

class Style extends GlobalStyle {
  container = {
    justifyContent: 'center',
    padding: 20,
    flex: 1,
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