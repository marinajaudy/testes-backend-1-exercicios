// Exercício 3
// Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.
// Crie pelo menos um teste que valida sua implementação.

export const exercicio3 = (nome: string): boolean =>{
    const userList = ["Marina", "Alex", "Andrea", "Guilherme", "Astrodev"]
    return userList.includes(nome)

}