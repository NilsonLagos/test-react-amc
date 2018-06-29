import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('setup default filter values',()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('set sort by amount',()=>{
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('set sort by date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const state = filtersReducer(currentState,{type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('set text filter',()=>{
    const state=filtersReducer(undefined,{type:'SET_TEXT_FILTER', text:'hola'});
    expect(state.text).toBe('hola');
});

test('set start date',()=>{
    const state=filtersReducer(undefined,{type:'SET_START_DATE', startDate:123});
    expect(state.startDate).toBe(123);
});

test('set end date',()=>{
    const state=filtersReducer(undefined,{type:'SET_END_DATE', endDate:321});
    expect(state.endDate).toBe(321);
});