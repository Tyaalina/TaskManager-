import { COMPLITED_TASK, CREATE_TASK } from "./types"

const initialState = {
    tasks: [],
}

export const tasksReduser = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return { ...state, tasks: state.tasks.concat(action.payload) }
        case COMPLITED_TASK:
            state.tasks[action.payload.id] = { name: action.payload.name, completed: action.payload.completed }
            return { ...state, tasks: state.tasks }
        default:
            return state
    }
}