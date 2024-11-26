


function refresh() {
    location.reload();
}

let normal = [];

function gerarN() {
    const senhan = "Normal " + Math.floor(Math.random() * (10 + 2));
    const num = normal.push(senhan);
    listar();
}

let pref = [];

function gerarP() {
    const senhap = "Preferêncial " + Math.floor(Math.random() * (40 + 20));
    const num = pref.push(senhap);
    listar();
}

let lista = [];

function chamar() {
    if (lista != "") {
        let num = lista.shift();
        document.getElementById("chamarSenha").innerHTML = num;
        document.getElementById("ultimaSenha").innerHTML = num;
        const tam = lista.length;
        let texto = "<ul>";
        for (i = 0; i < tam; i++) {
            texto += "<li>" + lista[i] + "</li>";
        }
        texto += "</ul>";
        document.getElementById("listaDeSenha").innerHTML = texto;
    } else {
        document.getElementById("chamarSenha").innerHTML = "Não à Senhas";
        setTimeout(function () {
            window.location.reload(1);
        }, 2000);
    }
}


function listar() {
    lista = pref.concat(normal);
    const tam = lista.length;
    let texto = "<ul>";
    for (i = 0; i < tam; i++) {
        texto += "<li>" + lista[i] + "</li>";
    }
    texto += "</ul>";
    document.getElementById("listaDeSenha").innerHTML = texto;
}

