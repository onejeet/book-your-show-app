import { combineReducers } from 'redux';
let initialState = {
    showList: [
        {
            id: 1,
            rowA: [1, 9],
            rowB: [1, 6],
            rowC: [2, 6],
            booked: []
        },
        {
            id: 2,
            rowA: [1, 9],
            rowB: [2, 6],
            rowC: [1, 4],
            booked: []
        },
        {
            id: 3,
            rowA: [1, 9],
            rowB: [2, 6],
            rowC: [1, 4],
            booked: []
        }
    ]
}

function updateCurrentOrder(state= {currentTotal: {amount : 0,serviceTax: 0,sbCess: 0,kkCess: 0}, selectedSeats : []}, action){
    if(action.type === 'UPDATE_AMOUNT'){
        let newState =  Object.assign({}, state);
        newState.currentTotal.amount += action.payload;
        newState.currentTotal.serviceTax += 0.14*action.payload;
        newState.currentTotal.sbCess += 0.005*action.payload;
        newState.currentTotal.kkCess += 0.005*action.payload;
        return newState;
    }

    if(action.type === 'UPDATE_CURRENT_SELECTION'){
        let i = state.selectedSeats.findIndex( x=> x.showId === action.payload.showId && x.seat === action.payload.seat);
        if( i !== -1){
            let newState =  Object.assign({}, state);
            newState.selectedSeats.splice(i, 1);
            return newState;
        }else{
            let newState =  Object.assign({}, state);
            newState.selectedSeats.push(action.payload);
            return newState;
        }
    }

    if(action.type === 'RESET_CURRENT_ORDER'){
        let newState =  Object.assign({}, state);
        newState.currentTotal = {amount : 0,serviceTax: 0,sbCess: 0,kkCess: 0};
        newState.selectedSeats.length = 0;
        return newState;
    }
    return state;
}

function updateTotalRevenue(state= {sales : {amount : 0,serviceTax: 0,sbCess: 0,kkCess: 0}}, action){
    if(action.type === 'UPDATE_REVENUE'){
        let newState =  Object.assign({}, state);
        newState.sales.amount += action.payload.amount;
        newState.sales.serviceTax += action.payload.serviceTax;
        newState.sales.sbCess += action.payload.sbCess;
        newState.sales.kkCess += action.payload.kkCess;
        return newState;
    }
    return state;
}


function shows(state = initialState, action){
    if(action.type === 'UPDATE_BOOKINGS'){
        let newState =  Object.assign({}, state);
        action.payload.forEach((obj) => {
           let show = newState.showList.find(x => x.id === parseInt(obj.showId));
           show.booked.push(obj.seat);
        });
        return newState; 
    }
    return state;
}

export default combineReducers({
    shows,
    currentOrder: updateCurrentOrder,
    revenue: updateTotalRevenue
});