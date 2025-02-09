function calcular(){
    var num1 = document.querySelector('input#num1').value
    var num2 = document.querySelector('input#num2').value
    var res = document.querySelector('div#res')

    var contador = Number(num1)
    var numdesejado = Number(num2)

    res.innerHTML = `<p>Números de ${contador} até ${numdesejado}: </p>`
    ateNumDesejado()

    function ateNumDesejado(){
        // if(contador <= numdesejado){
        //     for(contador;contador <= numdesejado;contador++){
        //         var num = contador
        //         if(num % 2 != 0){    
        //             res.innerHTML += `${num}, `
        //         }
        //     }
        // }
        if(contador <= numdesejado){
            for(contador;contador <= Number(numdesejado);contador++){
                var num = Number(contador)
                if(num % 2 != 0){
                    res.innerHTML += `${num}, `
                }
            }
        }
        else{
            for(contador;contador >= Number(numdesejado);contador--){
                var num = Number(contador)
                if(num % 2 != 0){
                    res.innerHTML += `${num}, `
                }
            }
        }
    }  
}