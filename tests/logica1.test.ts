import { logica1 } from '../src/logica1';

describe("logica1", () =>{
    test("transforma o número de 1 a 10 escrito por extenso", () =>{
        const result = logica1(10)
        expect(result).toBe("dez")
    })
})