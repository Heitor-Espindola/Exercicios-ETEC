Algoritmo "Numeros em ordem crescente"
// Disciplina   : [TPA]
// Professor   : Gustavo Miranda 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/02/2025
var
    a, b, c, temp: real
inicio
Escreval ("3 números em ordem crescente")
Escreva("Digite o primeiro número: ")
Leia(a)
Escreva("Digite o segundo número: ")
Leia(b)
escreva("Digite o terceiro número: ")
Leia(c)
Se (a > b) entao
   temp <- a
   a <- b
   b <- temp
Fimse
Se (b > c) entao
   temp <- b
   b <- c
   c <- temp
Fimse
     Se (a > b) entao
     temp <- a
     a <- b
     b <- temp
Fimse
Escreva("Os números em ordem crescente são: ", a, ", ", b, ", ", c)
fimalgoritmo
