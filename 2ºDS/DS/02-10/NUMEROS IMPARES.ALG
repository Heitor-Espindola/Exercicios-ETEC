Algoritmo "Numeros impares"
// Disciplina   : [TPA]
// Professor   : Gustavo Miranda 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/02/2025
var
    numinicial, numfinal, i: inteiro
    
    
inicio
Escreval ("Digite dois números, e vamos exibir todos os numeros impares entre eles")
Escreva("Digite o número inicial: ")
Leia(numinicial)
Escreva("Agora digite um número maior que o inicial: ")
Leia(numfinal)
Se (numinicial > numfinal) entao
   Escreva("O número inicial deve ser menor ou igual ao número final.")
Senao
     LimpaTela
     Escreval ("Os números ímpares são:")
     Para i de numinicial até numfinal faca
          Se (i %2 <> 0) entao
             Escreva(i, " ")
          Fimse
     Fimpara
Fimse
fimalgoritmo