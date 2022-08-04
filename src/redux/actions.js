const PICK = 'PICK';
export function fetchQuote() {
    return(dispatch) => {
        dispatch(pickQuote())
    }
}

const pickQuote = () => {
    return {
        type: PICK
    }
}