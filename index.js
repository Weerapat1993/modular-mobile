import { AppRegistry } from 'react-native';
import App from './src';
import appJson from './app.json' 

AppRegistry.registerComponent(appJson.name, () => App);
