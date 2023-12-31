import { REQUESTING_QUOTE, RECEIVED_QUOTE } from '../action-types/actionTypes.js';

// Define actions
export const requestingQuote = () => {
    return {
        type: REQUESTING_QUOTE,
    }
}

export const receivedQuote = (payload) => {
    return {
        type: RECEIVED_QUOTE,
        color: 'hsl(' + Math.random() * 360 + ', 50%, 25%)',
        quote: payload
    }
}

// Define async handler
export const handleAsync = () => {
    return dispatch => {
        dispatch(requestingQuote());
        
        // Setting delay for fadeIn and fadeOut effects
        setTimeout(() => {
            // API Call
            fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(receivedQuote(data));
            })
            .catch(err => {
                console.log(err);
            })
        }, 500)
        
    }
}