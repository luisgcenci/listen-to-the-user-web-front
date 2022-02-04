import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import SideBar from 'components/SideBar';
import './App.css';
import Home from 'routes/Home';
import Settings from 'routes/Settings';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <div className="App-SideBar">
          <SideBar />
        </div>
        <div className="App-Routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
