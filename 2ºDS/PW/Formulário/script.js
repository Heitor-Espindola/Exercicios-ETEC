var cadastros = [];
var i = 1, id, nome, cpf, estadoC, anoNasc, email, tel, sexo, rua, numCasa, complemento, bairro, cidade, estado, cep, nomeUser, senha, confirmSenha;
var mensagemValidar = document.querySelector('p#msgValidar');
var mensagemMostrar = document.querySelector('p#msgMostrar');
var msgCadastrado = document.querySelector('p#msgCadastrado');

document.getElementById("cpf").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = valor;
});

document.getElementById("tel").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    e.target.value = valor;
});
document.getElementById("cep").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, ""); // Remove não números
    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
    }
    e.target.value = valor;
});
// Não consegui encontrar uma máscara de entrada que funcionasse no meu código, aí pedi para a IA me ajudar com isso



function Validar(){
    let nome = document.getElementById("nome").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let email = document.getElementById("email").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let estadoC = document.querySelector('input[name="estadoCivil"]:checked')?.value;
    let sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    let anoNasc = document.getElementById("idade").value.trim();
    let rua = document.getElementById("rua").value.trim();
    let numCasa = document.getElementById("numCasa").value.trim();
    let complemento = document.getElementById("complemento").value.trim();
    let bairro = document.getElementById("bairro").value.trim();
    let estado = document.getElementById("estado").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let cep = document.getElementById("cep").value.trim();
    let nomeUser = document.querySelector(".inputNomeUser").value.trim();
    let senha = document.querySelector(".inputSenha").value.trim();
    let confirmSenha = document.querySelector(".inputConfirmarSenha").value.trim();

    cep = document.querySelector('input#cep').value;

    nomeUser = document.querySelector('input.inputNomeUser').value;
    senha = document.querySelector('input.inputSenha').value;
    confirmSenha = document.querySelector('input.inputConfirmarSenha').value;
    


    switch (nome && cpf && anoNasc && email && tel && rua && numCasa && bairro && cidade && estado && cep && nomeUser && senha && confirmSenha){
        case '':
            MensagemValidar();
            return 'Preencha todos os campos';
            break;
    }
        
    if (senha.length < 6){
        SenhaPequena();
        return 'A senha deve ter pelo menos 6 dígitos';
    }
    
    if (senha !== confirmSenha){
        SenhasDiferente();
        return 'As senhas não correspondem';
    }
    
    cliente = {
        id: i,
        nome: nome,
        cpf: cpf,
        estadoC: estadoC,
        anoNasc: anoNasc,
        email: email,
        tel: tel,
        sexo: sexo,
        rua: rua,
        numCasa: numCasa,
        complemento: complemento,
        estado: estado,
        cidade: cidade,
        cep: cep
    }
    CadastroConcluido(cliente.nome);
    i++;
    cadastros.push(cliente)
    console.log(cliente)
}


function MostrarTodosCadastrados(){
    document.getElementById('cadastros').hidden = true;

    var cadastrados = document.querySelector('p#Cadastrados');
    cadastrados.innerHTML = '';
    
    if (cadastros.length == 0) {
        MensagemMostrar();
        return 'Nenhum cliente cadastrado';
    }
    document.getElementById('cadastros').hidden = false;
    cadastrados.innerHTML = ' ';
    cadastros.forEach((item) => {
        cadastrados.innerHTML += `<br>
        <div class="pCadastro">
            <p class="textCadastro">
                {
                    <br>
                    Id: ${item.id}<br>
                    Nome: ${item.nome}<br>
                    CPF: ${item.cpf}<br>
                    Estado Civil: ${item.estadoC}<br>
                    Ano de Nascimento: ${item.anoNasc}<br>
                    Email: ${item.email}<br>
                    Telefone: ${item.tel}<br>
                    Sexo: ${item.sexo}<br><br>
                    <strong>Endereço:</strong><br>
                    Rua: ${item.rua}<br>
                    Número da Casa: ${item.numCasa}<br>
                    Complemento: ${item.complemento}<br>
                    Estado: ${item.estado}<br>
                    Cidade: ${item.cidade}<br>
                    CEP: ${item.cep}<br>
                }<br><br>
                <input type="button" value="Apagar registro" class="botao" id="apagar" onclick="Apagar(${item.id})">
            </p>
        </div><br>`;
    });

}

function MensagemValidar(){
    mensagemValidar.innerHTML = 'Preencha todos os campos!';
    console.log('Preencha todos os campos');
    setTimeout(Limpar, 3000);
}

function CadastroConcluido(nome){
    msgCadastrado.innerHTML = `Cliente ${nome} cadastrado`;
    setTimeout(Limpar, 3000);
    document.querySelector('input#nome').value = '';
    document.querySelector('input#cpf').value = '';
    document.querySelector('dl#estadoCivil').value = '';
    document.querySelector('input#idade').value = '';
    document.querySelector('input#email').value = '';
    document.querySelector('input#tel').value = '';
    document.querySelector('dl#dlSexo').value = '';
    document.querySelector('input#rua').value = '';
    document.querySelector('input#numCasa').value = '';
    document.querySelector('input#complemento').value = '';
    document.querySelector('input#bairro').value = '';
    document.querySelector('input#cidade').value = '';
    document.querySelector('input#cep').value='';
    document.querySelector('input.inputNomeUser').value = '';
    document.querySelector('input.inputSenha').value = '';
    document.querySelector('input.inputConfirmarSenha').value = '';
}

function MensagemMostrar(){
    mensagemMostrar.innerHTML = 'Nenhum cliente cadastrado!';
    console.log('Nenhum cliente cadastrado');
    setTimeout(Limpar, 3000);
}
function Limpar(){
    mensagemValidar.innerHTML = '';
    mensagemMostrar.innerHTML = '';
    msgCadastrado.innerHTML = '';
}

function Apagar(id) {
    const index = cadastros.findIndex(cliente => cliente.id === id);
    
    if (index !== -1) {
        cadastros.splice(index, 1);
        mensagemMostrar.innerHTML = `Cliente com id ${id} removido`;
        setTimeout(Limpar, 3000);
    } else {
        mensagemMostrar.innerHTML = `Cliente com id ${id} não encontrado`;
        setTimeout(Limpar, 3000);
    }
    MostrarTodosCadastrados();
}

function SenhasDiferente(){
    mensagemValidar.innerHTML = 'As senhas não correspondem!';
    console.log('As senhas não correspondem');

    setTimeout(Limpar, 3000);
}
function SenhaPequena(){
    mensagemValidar.innerHTML = 'A senha deve ter pelo menos 6 dígitos!';
    console.log('A senha deve ter pelo menos 6 dígitos');

    setTimeout(Limpar, 3000);
}