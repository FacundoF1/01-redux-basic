import { Action } from "../ngrx-fake/ngrx";

export const incrementAction: Action = {
    type: 'Increment'
};

export const decrementAction: Action = {
    type: 'Decrement'
};

export const multiplicationAction: Action = {
    type: 'Multiplication',
    payload: 3
};

export const divideAction: Action = {
    type: 'Dividing',
    payload: 2
};

export const resetAction: Action = {
    type: 'Reset'
};