import React from 'react';
import store from "./Redux/store";
import './App.css';
import {Provider} from "react-redux";
import Routes from "./routes";

function App() {
  return (
      <Provider store={store}>
        <Routes/>
      </Provider>
  );
}

export default App;
