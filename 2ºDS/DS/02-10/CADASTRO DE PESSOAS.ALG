Algoritmo "Cadastro de pessoas"
// Disciplina   : [TPA]
// Professor   : Gustavo Miranda
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/02/2025
var
    nome, genero, profissao: caractere
    ano_nascimento, qtd_total, qtd_fisio_1989, qtd_cidinha: inteiro
    continuar: caractere
inicio
    // Inicializa contadores
qtd_total <- 0
qtd_fisio_1989 <- 0
qtd_cidinha <- 0

Repita
      Escreva("Digite o nome: ")
      Leia(nome)
      Escreva("Digite o ano de nascimento: ")
      Leia(ano_nascimento)
      Escreva("Digite o gênero (M/F/O): ")
      Leia(genero)
      Escreva("Digite a profissão: ")
      Leia(profissao)

      qtd_total <- qtd_total + 1

      Se (profissao = "Fisioterapeuta") e (ano_nascimento = 1989) entao
         qtd_fisio_1989 <- qtd_fisio_1989 + 1
      Fimse
      Se (nome = "Cidinha da Silva") entao
         qtd_cidinha <- qtd_cidinha + 1
      Fimse
      Escreva("Deseja cadastrar outra pessoa? (S/N): ")
      Leia(continuar)
Ate (continuar = "N") ou (continuar = "n")
Escreval("         Resultados")
Escreval("Total de pessoas cadastradas: ", qtd_total)
Escreval("Quantidade de fisioterapeutas nascidos em 1989: ", qtd_fisio_1989)
Escreval("Quantidade de pessoas chamadas 'Cidinha da Silva': ", qtd_cidinha)

fimalgoritmo

