export const increment = (nr) => {
    return {
        type: 'increment',
        payload: nr,
    };
}

export const decrement = (nr) => {
    return {
        type: 'decrement',
        payload: nr,
    };
}