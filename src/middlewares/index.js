export const logger = (store) => (next) => (action) => {
    console.log(action);

    // Pass action to reducer.
    next(action);
}

export const featuring = (store) => (next) => (action) => {
    // Update the data we are sending.
    const featured = [{ name: 'eddie' }, ...action.action.payload];

    // Update the action to pass.
    const updatedAction = {
        ...action,
        action: {
            ...action.action,
            payload: featured,
        }
    }

    // Pass action to reducer.
    next(updatedAction);
}