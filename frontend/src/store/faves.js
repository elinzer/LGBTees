import { csrfFetch } from "./csrf";

const GET_FAVES = "faves/GET_FAVES";
const ADD_FAVE = "faves/ADD_FAVE";

const get = (faves) => ({
    type: GET_FAVES,
    payload: faves
})

const add = (fave) => ({
    type: ADD_FAVE,
    payload: fave
})

//get all faves
export const getAllFaves = () => async (dispatch) => {
    console.log("did u get here?")
    const response = await csrfFetch('/api/faves');
    const data = await response.json();
    console.log('data??', data)
    dispatch(get(data));
    return response;
}

//add fave
export const addFave = (info) => async (dispatch) => {

    const {teeId, userId} = info;

    const response = await csrfFetch('/api/faves', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teeId,
            userId
        })
    });
    const data = await response.json();
    dispatch(add(data));
    return response;
}



const initialState = {};

const favesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_FAVES:
            newState = {};
            action.payload.Faves.forEach(fave => {
                newState[fave.id] = fave;
            });
            return newState;
        default:
            return state;
    }
}

export default favesReducer;
