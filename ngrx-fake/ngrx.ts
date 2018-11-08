export interface Action{
    type: string;
    payload?: any;
}

// de tipo generico
export interface Reducer<T>{
    (state: T, action: Action):T;
}