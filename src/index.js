import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import { PersistGate } from 'redux-persist/lib/integration/react';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2
// }

// const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// const persistor = persistStore(store);

// persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
