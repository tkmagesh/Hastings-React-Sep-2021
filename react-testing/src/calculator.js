import Logger from './Logger';

class Calculator{

    constructor(logger){
        this.logger = logger;
    }

    add(x,y){
        let result = x + y;
        this.logger.log(`Adding ${x} and ${y} results in ${result}`);
        return result;
    }
    subtract(x,y){
        let result = x - y;
        this.logger.log(`Subtracting ${x} and ${y} results in ${result}`);
        return result;
    }

    addAsync(x,y, callback){
        setTimeout(()=>{
            let result = x + y;
            this.logger.log(`Adding ${x} and ${y} results in ${result}`);
            callback(result);
        }, 3000);
    }


}

export default Calculator;