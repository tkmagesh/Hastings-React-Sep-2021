import Calculator from './calculator';
import Logger from './logger';

describe("Calculator", () => {
    let calculator;
    let logger;

    beforeEach(() => {
        logger = { 
            log: jest.fn()
        }
        calculator = new Calculator(logger);
    });

    afterEach(() => {
        calculator = null;
    });

    it("Should log the message during calculations", () => {
        const expectedMessage = 'Adding 100 and 200 results in 300';
        const result = calculator.add(100,200)
        
        //expect(logger.log).toHaveBeenCalled();
        //expect(logger.log).toHaveBeenCalledTimes(1)
        expect(logger.log).toHaveBeenCalledWith(expectedMessage);
    })

    it("Should add 2 numbers", () => {
        //Arrange
        const x = 100, y = 200;
        const expectedResult = 300;

        //Act
        const result = calculator.add(x, y);

        //Assert
        expect(result).toBe(expectedResult);
    })
    it("Should subtract 2 numbers", () => {
        //Arrange
        const x = 100, y = 200;
        const expectedResult = -100;

        //Act
        const result = calculator.subtract(x, y);

        //Assert
        expect(result).toBe(expectedResult);
    })

    it("Should add 2 numbers asynchronously", (done) => {
        //Arrange
        const x = 100, y = 200;
        const expectedResult = 300;

        //Act
        calculator.addAsync(x, y, (result) => {
            expect(result).toBe(expectedResult);
            done();
        });
        
    })
});



/* test("Calculator - Adding 2 numbers", () => {
    //Arrange
    const calculator = new Calculator();
    const x = 100, y = 200;
    const expectedResult = 300;

    //Act
    const result = calculator.add(x, y);

    //Assert
    expect(result).toBe(expectedResult);
})

test("Calculator - Subtracting 2 numbers", () => {
    //Arrange
    const calculator = new Calculator();
    const x = 100, y = 200;
    const expectedResult = -100;

    //Act
    const result = calculator.subtract(x, y);

    //Assert
    expect(result).toBe(expectedResult);
}) */