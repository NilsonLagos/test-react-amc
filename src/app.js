import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import * as expenses from './actions/expenses';
import * as filters from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(expenses.addExpense({ description: 'Water bill', amount:4500 }));
store.dispatch(expenses.addExpense({ description: 'Gas bill',createdAt:1000 }));
store.dispatch(expenses.addExpense({ description: 'Rent', amount:109500 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

const jsx = (
    <Provider store = {store}>
            <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));


