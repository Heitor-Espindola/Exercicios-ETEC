Algoritmo "Assistente de vendas"
var
valor_produto, percentual_lucro, valor_venda: real


inicio
Escreval ("Diremos qual o valor você de colocar no produto, basta dizer qual preço pagou nele e qual quer que seja a porcentagem de lucro")
Escreva("Digite quanto você pagou no produto: ")
Leia(valor_produto)
Escreva("Digite a porcentagem de lucro desejada (em porcentagem): ")
Leia(percentual_lucro)

valor_venda <- valor_produto + (valor_produto * percentual_lucro / 100)

Escreva("Coloque o produto à: R$ ", valor_venda)
fimalgoritmo
