import { exercicio3 } from "../src/exercicio3";

describe('exercicio3', () => { 
    test("verfica se na lista de usuários tem o nome 'Astrodev'", () =>{
        const result = exercicio3("Astrodev")
        expect(result).toBe(true)
    })
 })