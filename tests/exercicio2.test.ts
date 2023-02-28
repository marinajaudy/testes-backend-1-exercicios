import { exercicio2 } from '../src/exercicio2'

describe("exercicio2", () =>{
    test("recebe a data na versão amerciana e transforma da versão brasileira", () =>{
        const result = exercicio2("2022/09/26")
        expect(result).toEqual("26/09/2022")
    })
})