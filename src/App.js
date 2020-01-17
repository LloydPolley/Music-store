import React from "react";
import "./App.scss";
import AppRouter from "./router/AppRouter";
import {Provider} from 'react-redux';
import store from './redux/store';

import './firebase/firebase';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
