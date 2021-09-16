class Greeter{
    constructor(dateService){
        this.dateService = dateService;
    }
    greet(name){
        if (this.dateService.getCurrent().getHours() <= 12){
            return `Hi ${name}, Good Morning!`
        } else {
            return `Hi ${name}, Good Evening!`
        }
    }
}

class DateService{
    getCurrent(){
        return new Date();
    }
}

export default Greeter;