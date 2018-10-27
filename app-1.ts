// Acciones
interface Action{
    type: string;
    payload?: any;
}

const incrementAction: Action = {
    type: 'Increment'
};

const decrementAction: Action = {
    type: 'Decrement'
};

function reducer( state = 10, action: Action){
    // if( action.type === 'Increment' ){
    //     return state+=1;
    // }
    switch (action.type) {
        case 'Increment':
            return state +=1;

        case 'Decrement':
            return state -=1;
        default:
            return state;
    }
}

console.log( reducer(10, incrementAction) ); // echo 11
console.log( reducer(20, decrementAction) ); // echo 19