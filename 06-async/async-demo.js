(function(){

    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = addSync(x,y);
        console.log(`[@client] result is ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    //Async with callback
    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result is ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    //Async with Promise

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result)
            }, 4000);
        });
        return p;
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        });
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`);
        return result * 2;
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();