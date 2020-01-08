import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { IdleQueue } from 'idlize/IdleQueue.mjs';
import configureStore from './redux/store';
import { ingredients } from './data/ingredients';
import { App } from './components';

const appState = localStorage.getItem('app-state');
const initialState = appState
  ? fromJS(JSON.parse(appState))
  : fromJS(
      JSON.parse(
        JSON.stringify({
          ingredients,
          selectedIngredient: {}
        })
      )
    );
const store = configureStore(initialState);

const queue = new IdleQueue({
  ensureTasksRun: true
});

store.subscribe(() => {
  queue.clearPendingTasks();
  queue.pushTask(() => {
    const state = store.getState();
    const jsonData = JSON.stringify(state.toJS());
    localStorage.setItem('app-state', jsonData);
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
