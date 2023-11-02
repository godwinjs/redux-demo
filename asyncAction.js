const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const applyMiddleware = redux.applyMiddleware()
const createStore = redux.createStore()

const initialState = {
    laoding: false,
    user: [],
    error: ''
}

const USER_REQUEST = 'USER_REQUEST', USER_SUCCESS = 'USER_SUCCESS', USER_FAILURE = 'USER_FAILURE';

const userRequest = () => {
    return {
        type: USER_REQUEST,
        payload: true
    }
}
const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
const userFailure = (error) => {
    return {
        type: USER_FAILURE,
        payload: error
    }
}

function reducer(state = initialState, action) {
    switch(action.type){
        case "USER_REQUEST":
            return {
                ...state,
                loading: action.payload
            }
        case "USER_SUCCESS":
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case "USER_FAILURE":
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(userRequest)

        axios.get('https://...').then((data) => {
            const users = data.users.map((user) => user.id)
            dispatch(userSuccess(users))
        }).catch(err => {
            dispatch(userFailure(err.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
const unsubscribe = store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers)
unsubscribe()