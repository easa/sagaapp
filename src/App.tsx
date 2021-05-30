import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './components/Home/Content';
import { store, persister } from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App;
