export const initialState = {
    message: "",
    errorMessage: "",
};

export const dogReducer= (state = initialState, action) => {
    switch(action.type) {
    case "NEW_DOG" :
        return {
            ...state,
            initialState: {
                message: ""
            }
        };
    case "DOG_CALL" :
        return {
            ...state,
            initialState: action.payload
        };
    case "CALL_ERROR" : 
        return {
            ...state,
            errorMessage: action.payload
        };
    default:
        return state;
    };
};