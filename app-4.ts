import { Store, createStore } from "redux";
import { countReducer } from "./count/count.reducer";
import { incrementAction } from "./count/count.actions";

const store: Store= createStore( countReducer );

store.subscribe( () => {
    console.log('Subs: ', store.getState() );
} )

store.dispatch(incrementAction)