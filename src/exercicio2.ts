// Exercício 2
// Crie uma função que recebe uma data no formato "aaaa/mm/dd" e retorna outra string no formato "dd/mm/aaaa".
// Exemplo: a entrada "2022/09/26" gera a saída "26/09/2022"
// Crie pelo menos um teste que valida sua implementação.

export const exercicio2 = (date: string): string => {
    const dataReverse = date.split('/').reverse().join('/')

    return dataReverse
}