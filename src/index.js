import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './reducers';

// Storeの生成
const store = createStore(
	// 1つのReducerで完結することはほぼないので、
	// 最初からcombineReducersを使う実装にしておく
	combineReducers(reducers),
	// Redux Middlewareにredux-loggerを設定
	applyMiddleware(logger)
);

ReactDOM.render(
	// Store を Appコンポーネントに紐付け
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
