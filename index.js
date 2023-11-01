const redux = require('redux')
const createStore = redux.legacy_createStore

const BUY_CAKE = 'BUY_CAKE';

// Action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'Bought one cake'
    }
}

// Initial State
initialState = {
    numberOfCakes: 10
}

// Pure Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "BUY_CAKE":
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('initial state: ', store.getState())
const unsubscribe = store.subscribe(console.log('updated state: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()