import { Reducer, Action } from "./ngrx-fake/ngrx";
import { countReducer } from "./count/count.reducer";
import { incrementAction } from "./count/count.actions";

// T es un tipo generico: number, string, object
class Store<T>{
    // propiedad con un tipo generico
    // private state: T;

    constructor( private reducer: Reducer<T>, private state: T){

    }

    getState(){
        return this.state;
    }

    dispatch( action: Action){

        this.state = this.reducer( this.state, action )

    }
}

const store = new Store( countReducer, 50 )

console.log( store.getState() );

console.log( store.dispatch( incrementAction ) );

console.log( store.getState() );

