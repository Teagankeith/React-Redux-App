export const initialState = {
    message: "",
    isFetchingData: false,
    errorMessage: "",
};

export const dogReducer= (state = initialState, action) => {
    switch(action.type) {
    case "NEW_DOG" :
        return {
            ...state,
            isFetchingData: true,
            messsage: ""
        };
    case "DOG_CALL" :
        return {
            ...state,
            isFetchingData: false,
            message: action.payload
        };
    case "CALL_ERROR" : 
        return {
            ...state,
            isFetchingData: false,
            errorMessage: action.payload
        };
    default:
        return state;
    };
};