import rootReducers from "../Redux/Combi";
import { createStore,applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "./RootSaga";

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,composeEnhancers(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(RootSaga)

export default store;