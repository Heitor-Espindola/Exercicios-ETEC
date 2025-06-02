algoritmo "Calculo de abono"
// Disciplina   : [TPA]
// Professor   : Gustavo Miranda
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/02/2025
var
salario, abono, salario_final: real
idade: inteiro
    
inicio
Escreva("Digite seu salário: R$ ")
leia(salario)

Escreva("Digite sua idade: ")
Leia(idade)
Se (idade >= 15) e (idade <= 30) entao
   abono <- 100
Senao
     Se (idade > 30) e (idade <= 35) entao
        abono <- 150
     Senao
          Se (idade > 35) e (idade <= 40) entao
             abono <- 200
          Senao
               Se (idade > 40) e (idade <= 75) entao
               abono <- 250
               Senao
                    abono <- 0
                    Escreva("Você foi demitido")
               Fimse
          Fimse
     Fimse
Fimse

Se (idade <= 75) entao
        salario_final <- salario + abono
LimpaTela
Escreval("         Resultado final ")
Escreval("Salário base: R$ ", salario)
Escreval("Abono salarial: R$ ", abono)
Escreval("Salário final com abono: R$ ", salario_final)
Fimse
fimalgoritmo
