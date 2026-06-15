import { SET_TODO, ADD_TODO, REMOVE_TODO } from "./constants"

export const setJob = payload => {
    return {
        type: SET_TODO,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const removeJob = payload => {
    return {
        type: REMOVE_TODO,
        payload
    }
}