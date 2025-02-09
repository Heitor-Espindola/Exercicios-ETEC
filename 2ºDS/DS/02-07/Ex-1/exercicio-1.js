// Calcular Bhaskara


function calcular(){
    var a, b, c, x1, x2, resp

    a = document.querySelector('input#I1').value
    b = document.querySelector('input#I2').value
    c = document.querySelector('input#I3').value
    resp = document.getElementById('res')
    resp.style.color = 'black'
    
    var discriminante = (b*b) + (-4*a*c)

    if(a == 0 && b == 0 && c == 0){
        resp.style.color = 'red'
        resp.innerHTML = "<strong>Os valores de a, b e c são iguais a 0, logo, não há resultados possiveis!</strong>"
    }
    else{
        if(discriminante >=  0){
            if(discriminante > 0){
                x1 = -b + Math.sqrt(discriminante)
                x2 = -b - Math.sqrt(discriminante)

                resp.innerHTML = `O discriminante (delta) é positivo, então x1 vale ${x1} e x2 vale ${x2}`
            }
            else{

                x1 = (-b) / (2*a)
            
                resp.innerHTML = `Como o discriminante (delta) é igual à 0, os resultados de x1 e x2 são iguais, x1 e x2 = ${x1}`
            }
        }
        else{
            resp.innerHTML = "O discriminante (delta) é menor que 0, logo, não há resultados possiveis!"
        }
    }
}