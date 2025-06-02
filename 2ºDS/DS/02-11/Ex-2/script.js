var i = 1;
var cadastros = [];
var masc = 0;
var fem = 0; 
var outro = 0;
var cidinhaSilva = 0;
var fisioterapeutas = 0;
var nome, anoNascimento, profissao, genero, gen, id;

function cadastrar() {
    nome = document.querySelector('input[name="nome"]').value;
    anoNascimento = document.querySelector('input[name="anoNascimento"]').value;
    profissao = document.querySelector('input[name="profissao"]').value;
    genero = document.querySelector('input[name="genero"]').value;


    switch (genero.toLowerCase()) {
        case 'm':
            gen = 'Masculino'
            id = i++;
            masc++;
            break;
        case 'f':
            gen = 'Feminino'
            id = i++;
            fem++;
            break;
        case 'o':
            gen = 'Outro'
            id = i++;
            outro++;
            break;
        default:
            return 'Gênero inválido'; 
            break;
    }
    
    let cadastro = {
            id: id,
            nome: nome,
            anoNascimento: anoNascimento,
            profissao: profissao,
            gen: gen
        }
    
    cadastros.push(cadastro);
    console.log(cadastro);
    
    if (cadastro.nome.toLowerCase() == 'cidinha da silva') {
        cidinhaSilva++
    }
    if (cadastro.gen == 'Feminino' && cadastro.anoNascimento == '1998' && cadastro.profissao.toLowerCase() == 'fisioterapeuta') {
        fisioterapeutas++
    }
}

function mostrarCadastrados(){
    var todos = document.querySelector('p#todoMundo');
    todos.innerHTML = ' ';
    cadastros.forEach((item) => {
        todos.innerHTML += `Id: ${item.id}<br>Nome: ${item.nome}<br>Ano de Nascimento: ${item.anoNascimento}<br>Profissão: ${item.profissao}<br>Gênero: ${item.gen}<br><br>`;
    });
}

function mostrarResultados(){
    var resp = document.querySelector('p#resp');
    resp.innerHTML = ' ';


    resp.innerHTML += `Quantidade de pessoas cde gênero <strong>masculino:</strong> ${masc} <br> Quantidade de pessoas de gênero <strong>feminino:</strong> ${fem} <br> Quantidade de pessoas de <strong>outro gênero:</strong> ${outro} <br><br>`;
    
    resp.innerHTML += `Quantidade de cadastros de gênero <strong>feminino</strong> que nasceu em <strong>1998</strong>, cuja profissão é <strong>fisioterapeuta</strong> cadastradas: ${fisioterapeutas} <br> <br>`;
    
    if (cidinhaSilva > 0) {
        resp.innerHTML += `Quantidade de <strong>Cidinha da Silva</strong> cadastradas: ${cidinhaSilva} <br> <br>`;
    }

    resp.innerHTML += `<strong>Quantidade de cadastros:</strong> ${cadastros.length}`;
}