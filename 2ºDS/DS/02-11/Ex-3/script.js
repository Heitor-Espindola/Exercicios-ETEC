var pedidos = {
    XTudão: 0,
    XBauru: 0,
    XFrangão: 0,
    XPorco: 0,
    XEgg: 0,
    Calabresa: 0,
    Lombo: 0,
    FrangoCatupiry: 0,
    QuatroQueijos: 0,
    BrócolisBacon: 0,
    CocaCola: 0,
    Guaraná: 0,
    Vinho: 0,
    Shake: 0,
    Água: 0,
};

function pedir(item){
    pedidos[item]++;
    document.getElementById('qtde' + item).innerText = `Quantidade: ${pedidos[item]}`;
    document.getElementById('menosUm' + item).hidden = false;
    console.log(pedidos);
}

function retirar(item){
    if(pedidos[item] > 0){
        pedidos[item]--;
        document.getElementById('qtde' + item).innerText = `Quantidade: ${pedidos[item]}`;
        if(pedidos[item] === 0){
            document.getElementById('menosUm' + item).hidden = true;
            document.getElementById('qtde' + item).innerText = ``;
        }
        console.log(pedidos);
    }
}

function finalizar(){
    var resp = document.getElementById('resp');
    resp.innerHTML = '';

    if(
        (pedidos.XBauru > 0 && (pedidos.Guaraná > 0)) 
        || 
        (pedidos.XFrangão > 0 && (pedidos.Água > 0)) 
        || 
        ((pedidos.Calabresa > 0 || pedidos.Lombo > 0 || pedidos.FrangoCatupiry > 0 || pedidos.QuatroQueijos > 0 || pedidos.BrócolisBacon > 0) && (pedidos.CocaCola > 0 || pedidos.Guaraná > 0 || pedidos.Shake > 0)) 
        || 
        (pedidos.XEgg > 0 && (pedidos.CocaCola > 0))
    ){
        resp.innerHTML = `Um Erro Ocorreu. Por favor, alguma combinação bugada foi adicionada ao seu pedido, por favor mude!`;
    }
    else{
        for(var item in pedidos){
            if(pedidos[item] > 0){
                resp.innerHTML += `Item ${item}: ${pedidos[item]}<br>`;
            }
        }

        if(resp.innerHTML === ''){
            resp.innerHTML = 'Nenhum item foi pedido.';
        }
        else{
            resp.innerHTML = 'Pedido finalizado:<br>' + resp.innerHTML;
        }
    }
}