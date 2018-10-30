// logica de las acciones y llamar a los reducer
import { Action } from "./ngrx-fake/ngrx";
import { incrementAction, decrementAction, multiplicationAction, divideAction, resetAction } from "./count/count.actions";

function reducer( state = 10, action: Action){
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

console.log( reducer(10, incrementAction) ); // echo 11
console.log( reducer(20, decrementAction) ); // echo 19
console.log( reducer(50, multiplicationAction) ); // echo 150
console.log( reducer( 10000, divideAction ) ); // echo 5000
console.log( reducer(10, resetAction ) ); // echo 0