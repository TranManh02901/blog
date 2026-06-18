import { SET_TODO, ADD_TODO, REMOVE_TODO } from "./constants"

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                job: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case REMOVE_TODO:
            const newJobss = [...state.jobs]
            newJobss.splice(action.payload, 1)

            return {
                ...state,
                jobs: newJobss
            }
        default:
            throw new Error('Loi roi xem lai di')
    }
}

export default reducer