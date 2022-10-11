import { initialState } from "./initialState";
import {ADDED} from "./actionTypes"
const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo)=> Math.max(todo.id,maxId),-1)
    return maxId+1;
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id:nextTodoId(state)
                }
            ]
    
        default:
            break;
    }
}