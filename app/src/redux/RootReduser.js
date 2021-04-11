import {combineReducers} from 'redux'
import {tasksReduser} from './TasksReducer'

export const rootReducer = combineReducers({
    tasksList: tasksReduser,
})