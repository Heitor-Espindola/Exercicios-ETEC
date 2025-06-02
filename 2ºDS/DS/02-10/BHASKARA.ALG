Algoritmo "Bhaskara"
// Disciplina   : [TPA]
// Professor   : Gustavo Miranda 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/02/2025

var
a, b, c, discriminante, x1, x2: real

inicio
Escreval ("Resolvendo Bhaskara")
Escreva("Digite o valor de A: ")
Leia(a)
Se (a = 0) então
   Escreva("O valor de A não pode ser zero em uma equação do segundo grau.")
   Senao
        Escreva("Digite o valor de B: ")
        Leia(b)
        Escreva("Digite o valor de C: ")
        Leia(c)
        discriminante <- (b * b) - (4 * a * c)
        Se (discriminante < 0) então
           Escreva("Não existem raízes reais, pois o discriminante é negativo.")
           Senao
                x1 <- (-b + raizq(discriminante)) / (2 * a)
                x2 <- (-b - raizq(discriminante)) / (2 * a)
                Escreva("As raízes da equação são: X1 = ", x1, " e X2 = ", x2)
        Fimse
Fimse
fimalgoritmo
