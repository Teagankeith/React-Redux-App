import axios from "axios";

export const NEW_DOG =  'NEW_DOG';
export const DOG_CALL = "DOG_CALL";
export const CALL_ERROR = "CALL_ERROR";


export const getDog = dispatch => {
    dispatch({type: NEW_DOG});
    axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        dispatch({type: "DOG_CALL", payload: res.message})
    })
    .catch(err => {
        console.log("An Error Happened", err)
        dispatch({type: "CALL_ERROR", payload: "Can't fetch data"})
    });
};