/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App.js';
import store from './src/Redux/store.js';
import { Provider } from 'react-redux';

const AppRedux =()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
