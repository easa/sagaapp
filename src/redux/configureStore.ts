import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import usersReducer from './modules/call';
import positionReducer from './modules/position';
import { watcherSaga } from './saga';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  users: usersReducer,
  positions: positionReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

const persister = persistStore(store);

export { store, persister, sagaMiddleware };
