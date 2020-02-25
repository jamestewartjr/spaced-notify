import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './App.scss'
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
