var a = window.document.getElementById('caixa1')
var b = window.document.getElementById('caixa2')
var c = window.document.getElementById('caixa3')

a.addEventListener('click', clicar1)
a.addEventListener('mouseenter', entrar1)
a.addEventListener('mouseout', sair1)

function clicar1() {
a.innerText = 'clicou!'
}
function entrar1(){
    a.style.backgroundColor = 'red'
}
function sair1(){
    a.style.backgroundColor = 'green'
}


b.addEventListener('click', clicar2)
b.addEventListener('mouseenter', entrar2)
b.addEventListener('mouseout', sair2)
function clicar2() {
    b.innerText = 'clicou!'
}
function entrar2(){
    b.style.backgroundColor = 'red'
}
function sair2(){
    b.style.backgroundColor = 'green'
}


c.addEventListener('click', clicar3)
c.addEventListener('mouseenter', entrar3)
c.addEventListener('mouseout', sair3)
function clicar3() {
    c.innerText = 'clicou!'
}
function entrar3(){
    c.style.backgroundColor = 'red'
}
function sair3(){
    c.style.backgroundColor = 'green'
}