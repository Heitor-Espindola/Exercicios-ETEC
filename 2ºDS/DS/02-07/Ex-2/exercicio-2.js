function calcular(){
    var custo, porcentagemLucro, Vvenda, resp
    
    custo = document.querySelector('input#c').value
    porcentagemLucro = document.querySelector('input#l').value
    resp = document.getElementById('res')

    Vvenda = Number(custo) + (Number(custo) * Number(porcentagemLucro))/100

    resp.innerHTML = `o valor da venda será de ${Vvenda.toFixed(2)}`
}