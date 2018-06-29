import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test('end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test('sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'        
    })
})

test('sort by date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'        
    })
})

test('filter with text',()=>{
    const action = setTextFilter('dummy');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'dummy'  
    })
})

test('filter w/o text',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''  
    })
})