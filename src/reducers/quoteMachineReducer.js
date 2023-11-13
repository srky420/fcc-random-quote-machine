import { REQUESTING_QUOTE, RECEIVED_QUOTE } from '../action-types/actionTypes.js';

// Define default state
const defaultState = {
    fetching: false,
    color: '',
    quote: {} 
};

// Define reducer
const quoteMachineReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_QUOTE:
            return {
                fetching: true,
                color: state.color,
                quote: state.quote
            }
        case RECEIVED_QUOTE:
            return {
                fetching: false,
                color: action.color,
                quote: action.quote
            }
        default:
            return state;
    }
}

export default quoteMachineReducer;
