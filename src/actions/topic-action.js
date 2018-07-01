export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SETVALUE = 'SETVALUE';

export function incrementCounter() {
    return {
        type: INCREMENT
    }
}

export function decrementCounter() {
    return {
        type: DECREMENT
    }
}

export function setCounter(val) {
    return {
        type: SETVALUE,
        val
    }
}
