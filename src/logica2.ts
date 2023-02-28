// 2
// Crie uma função que recebe dois números e retorna um objeto com duas propriedades, o valor da divisão entre o primeiro e o segundo e o resto de sua divisão. Caso um ou mais inputs não sejam válidos é retornado um objeto com propriedade “error” valendo true.
//(n1, n2) ==> {prop1: n1/n2, prop2:n1%n2}

export const logica2 = (a: number, b: number): {} =>{
    const div = a / b

    const result = {
        division: div,
        rest: a % b
    }

    console.log(result.rest)


    return result

}
