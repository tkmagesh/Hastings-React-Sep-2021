function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.info('Before ', store.getState());
            console.info(action);
            next(action);
            console.info('After ', store.getState());
            console.groupEnd();
        }
    }
}

export default loggerMiddleware;