function verificar(){
    var idade = document.querySelector('input#idade').value;
    var salario = document.querySelector('input#salario').value;
    var resp = document.querySelector('p#resp');
    var demitido = false;
    var abono

    if (idade >= 15 && idade <= 30) {
        abono = 100;
    } else if (idade > 30 && idade <= 35) {
        abono = 150;
    } else if (idade > 35 && idade <= 40) {
        abono = 200;
    } else if (idade > 40 && idade <= 75) {
        abono = 250;
    } else if (idade > 75) {
        abono = 0;
        demitido = true;
    } else {
        resp.innerHTML = 'Idade inválida!';
        return;
    }

    salario = parseInt(salario) + abono;

    if (demitido == false) {
        resp.innerHTML = `O salário + abono do funcionário é de R$ ${salario},00.`}
    else {
        resp.innerHTML = `VOCÊ FOI <strong>DEMITIDO</strong> POR SER UM FUNCIONÁRIO IDOSO! VOCÊ TEM ${idade} ANOS! VÁ APROVEITAR A APOSENTADORIA!`}
}