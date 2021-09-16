import Greeter from './greeter'

describe("Greeter", () => {
    it("Should greet 'Good Morning' before 12", () => {
        const mockDateService = {
            getCurrent : jest.fn()
        }
        mockDateService.getCurrent.mockReturnValue(new Date(2017, 0, 1, 9, 0, 0))
        const greeter = new Greeter(mockDateService)
        expect(greeter.greet('Magesh')).toBe("Hi Magesh, Good Morning!")
    });

    it ("Should greet 'Good Afternoon' after 12", () => {
        const mockDateService = {
            getCurrent : jest.fn()
        }
        mockDateService.getCurrent.mockReturnValue(new Date(2017, 0, 1, 16, 0, 0))
        const greeter = new Greeter(mockDateService)
        expect(greeter.greet('Magesh')).toBe("Hi Magesh, Good Evening!")
    });
})