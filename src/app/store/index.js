import {createStore} from "redux";
import {defaultState} from '../../server/defaultState.js'

export const store = createStore( //
    function reducer(state = defaultState, action) { // it is a special function that tasks 2 args ( state and Action ) and always return a new state
        return state
    }
)