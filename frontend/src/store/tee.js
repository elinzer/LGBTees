import { csrfFetch } from './csrf';

//types
const ADD_TEE = 'tee/ADD_TEE';
const GET_ALL_TEES = 'tee/GET_ALL_TEES';
const EDIT_TEE = 'tee/EDIT_TEE';
const DELETE_TEE = 'tee/DELETE_TEE';

//actions
const add = (tee) => ({
    type: ADD_TEE,
    payload: tee
})

const get = (tees) => ({
    type: GET_ALL_TEES,
    payload: tees
})

const edit = (tee) => ({
    type: EDIT_TEE,
    payload: tee
})

const remove = (id) => ({
    type: DELETE_TEE,
    payload: id
})


//thunks
//get all tees
export const getAllTees = () => async (dispatch) => {
    const response = await csrfFetch('/api/tees');
    const data = await response.json();
    dispatch(get(data));
    return response;
}

//create tee
export const createTee = (tee) => async (dispatch) => {

    const {userId, name, url, price, brand, imageUrl} = tee;

    const response = await csrfFetch('/api/tees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            name,
            url,
            price,
            brand,
            imageUrl
        })
    });
    const data = await response.json();
    dispatch(add(data.tee));
    return response;
}

//edit tee
export const editTee = (tee) => async (dispatch) => {

    const { id, name, url, userId, price, brand, imageUrl } = tee;

    const response = await csrfFetch(`/api/tees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            url,
            userId,
            price,
            brand,
            imageUrl

        })
    });
    const data = await response.json();
    dispatch(edit(data.tee));
    return response;
}

//delete tee
export const deleteTee = (tee) => async (dispatch) => {

    const { id } = tee;

    const response = await csrfFetch(`/api/tees/${id}`, {
        method: 'DELETE'
    });
    dispatch(remove(id));
    return response;
}


//reducer
const initialState = {};

const teeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_TEE:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case GET_ALL_TEES:
            newState = {};
            action.payload.Tees.forEach(tee => {
                newState[tee.id] = tee;
            });
            return newState;
        case EDIT_TEE:
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_TEE:
            newState = {...state};
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default teeReducer;
