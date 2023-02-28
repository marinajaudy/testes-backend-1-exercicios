import { logica2 } from '../src/logica2';

describe("logica2", () => {
    test("", () => {
        const result = logica2(10, 2)
        expect(result).toEqual({division: 5, rest: 0})
    })
})