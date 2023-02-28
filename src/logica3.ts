// 3
// Crie uma função que recebe uma string e a retorna invertida. Por exemplo, se o argumento for “Hello world!” deverá ser retornado “!dlrow olleH”. Tente não utilizar métodos nativos do JS.

export const logica3 = (input: string): string =>{
    return input.split('').reverse().join('')
}