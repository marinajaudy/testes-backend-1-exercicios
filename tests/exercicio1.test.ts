import { exercicio1 } from "../src/exercicio1"

describe("exercicio1", () => {
    test("recebe uma string com número e converte para number ", () => {
        const result = exercicio1("80")
        expect(result).toBe(80)
    })
})