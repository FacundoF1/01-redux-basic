// console.log('hola mundo');
// Acciones
interface Action{
    type: string;
    payload?: any;
}

const incrementAction: Action = {
    type: 'Increment'
};

// func
function reducer( state = 10, action: Action){
    if( action.type === 'Increment' ){
        return state+=1;
    }
    return state;
}

console.log( reducer(10, incrementAction) );