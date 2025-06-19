import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react'; 
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './features/userSlicer.js';
import product from './features/productSlice.js';
import searcherSlicer from './features/searchSlice.js'
import cartSlicer from './features/cartSlicer.js'


const client = new QueryClient();

const configureReducer = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  users: userSlice,
  product: product,
  search:searcherSlicer,
  cart:cartSlicer,
});


const persistedReducer = persistReducer(configureReducer, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
