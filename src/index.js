import ReactDOM from 'react-dom';
import App from './App';
import react from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import 'index.css';
const root = document.querySelector('#root');
const { storeConfig, partos } = store;
ReactDOM.render(
  <react.StrictMode>
    <Provider store={storeConfig}>
      <PersistGate persistor={partos}>
        <App />
      </PersistGate>
    </Provider>
  </react.StrictMode>,
  root,
);
