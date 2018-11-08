import { Action } from "../ngrx-fake/ngrx";

export function countReducer( state = 10, action: Action){
    // if( action.type === 'Increment' ){
    //     return state+=1;
    // }
    switch (action.type) {
        case 'Increment':
            return state +=1;

        case 'Decrement':
            return state -=1;

        case 'Multiplication':
            return state * action.payload;

        case 'Dividing':
            return state / action.payload;

        case 'Reset':
            return state = 0;

        default:
            return state;
    }
}