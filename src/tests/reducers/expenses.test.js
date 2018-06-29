import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('default state',()=>{
    const state=expensesReducer(undefined,'@@INIT');
    expect(state).toEqual([]);
});

test('remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'2'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('remove not expense if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'2913'
    }   
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
//add expense
test('add expense',()=>{
    const expense= {
        id: 4,
        description:'test expense',
        note:'',
        amount:0,
        createdAt:0
      }
    const action = {
        type:'ADD_EXPENSE',
        expense:expense
    }
    const state = expensesReducer(expenses, action);
    expect(state[3]).toEqual(expense);
});
//edit expense
test('edit expense by id',()=>{
    const expense={
        id:'1',
        description:'not gum',
        note: '',
        amount: 195,
        createdAt: 0
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'1',
        updates:expense
    }
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(expense);
});
//not edit expense if expense not found
test('not edit expense if id not found',()=>{
    const expense={
        id:'213123',
        description:'not gum',
        note: '',
        amount: 195,
        createdAt: 0
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'12313',
        updates:expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});