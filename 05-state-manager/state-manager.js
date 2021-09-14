let StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' }

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _subscribers.push(callback);
    }

    //private utility function
    function _emitChanges(){
        _subscribers.forEach(callback => callback())
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action)
        if (newState === _currentState) return;
        _currentState = newState;
        _emitChanges();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Invalid argument(s). Reducer is mandatory to create the store');
        _reducer = reducer;
        //to initialize the currentState with a valid default state (starting point)
        _currentState = reducer(undefined, _init_action);
        let store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore };
})();