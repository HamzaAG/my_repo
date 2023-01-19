import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './Config2/reducer';
const store = legacy_createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState())
root.render(
    <Provider store={store}>
        <App2 />
    </Provider>
);
