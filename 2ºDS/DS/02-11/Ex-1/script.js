var i = 0
let vetor = []
function add(){
    document.getElementById('botao').value = "adicionar"
    var number = document.querySelector('input#numeros').value
    var resp = document.querySelector('div#res')
    var txt = document.getElementById('txt')
    vetor.push(number)
    i++
    if(i <= 3){
        txt.innerHTML = `<p>Digite o valor do ${i+1}º elemento</p>`
        resp.innerHTML += `<p>${vetor}</p>`
        document.getElementById("res").innerText = vetor.join(", ")
        txtImportante.innerHTML = ``
    }
    if(i == 3){
        vetor.sort((a, b) => (a - b))
        resp.innerHTML += `<p>Ordem Crescente: ${vetor}</p>`
        document.getElementById('botao').value = "limpar"
        txt.innerHTML = `<p>Digite o valor do 1º elemento novamente (se quiser rodar o sistema novamente)</p>`
        txtImportante.innerHTML = `<p>ATENÇÃO: Se fizer isso, os elementos do vetor atual serão apagados</p>`
    }
    if(i > 3){
        i = 0
        resp.innerHTML = `<p></p>`
        txt.innerHTML = `<p>Digite o valor do ${i+1}º elemento</p>`
        txtImportante.innerHTML = `<p></p>`
        for(var y = 0;y <= 3;y++){
            vetor.pop(number)
        }
        
    }
}