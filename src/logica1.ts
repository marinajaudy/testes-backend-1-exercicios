// 1
// Crie uma função que recebe um número entre 1 a 10 e retorna seu valor em extenso. Por exemplo, se o input for 1 é retornado a string “um”. Caso o input não seja válido, o retorno deve ser um aviso de erro “parâmetro inválido”.

export const logica1 = (num: number): string =>{

    if(0 > num && num > 10){
        throw new Error("número deve ser entre 1 e 10")
    }

    if(typeof num !== "number"){
        throw new Error("parâmetro inválido")
    }

    const stringNumbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]

    return stringNumbers[num - 1]
}