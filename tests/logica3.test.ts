import { logica3 } from "../src/logica3";

describe("logica3", () =>{
    test("inverte a escrita da string", () =>{
        const result = logica3("marina")
        expect(result).toEqual("aniram")
    })
})