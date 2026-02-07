
import { ADD,CLEAR,TOGGLE,ALLCLEAR} from '../type/index.types';

export const addTodo = (todo) => {
    return {type:ADD, payload:todo}
}
export const toggleTodo = (id) => {
    return {type: TOGGLE, payload: id}
}
export const clearTodo = () => {
    return {type: CLEAR}
}
export const allClearTodo = () => {
    return {type: ALLCLEAR}
}