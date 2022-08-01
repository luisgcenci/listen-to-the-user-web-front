import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Apps from 'components/Apps';

const App = () => {

  return (
    <Provider store={store}>
      <Apps />
    </Provider>
  );
};

export default App;
