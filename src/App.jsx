import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'UserRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import Navbar from './components/modules/Navbar/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Navbar />
            <UserRoutes />
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
