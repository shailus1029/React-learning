export const increment = (task) => {
    return {
        type: 'INCREMENT',
        payload: task,
    };
};

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        payload: value,
    };
};

export const incrementByAmount = (value) => {
    return {
        type: 'INCREMENT_BY_AMOUNT',
        payload: value,
    };
};