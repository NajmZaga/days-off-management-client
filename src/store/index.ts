import {
	applyMiddleware,
	combineReducers,
	createStore,
	Middleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { manageToken } from "./auth/subscription";
import { authReducer } from "./auth/reducers";
import { watchMakeLogin } from "./auth/sagas";

// Create a root reducer with combined reducers

const rootReducer = combineReducers({
  authorization: authReducer
});

// Define GlobalState Type
export type GlobalState = ReturnType<typeof rootReducer>;

function* rootSaga() {
	yield all([
		fork(watchMakeLogin),
	]);
}

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware: Middleware[] = [sagaMiddleware];
	const middlewareEnhancer = applyMiddleware(...middleware);
	const composeEnhancers = composeWithDevTools({});

	const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));
	sagaMiddleware.run(rootSaga);

	// Subscriptions
	store.subscribe(manageToken(store));
	return store;
};

export default configureStore;
