

function buscarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    let url = `http://www.omdbapi.com/?t=${filmes}&apikey=f2ea36dc`
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let filmeBuscado = document.getElementById("filmeBuscado")
            filmeBuscado.innerHTML = `Título do Filme: ${data.Title} - Produzido em: ${data.Country}`
            console.log("Dados da API: ",data)
        })

    /* NÃO ESTÁ FUNCIONANDO:
        .catch(undefined => {
            let mensagemErro = document.querySelector("p#filmeBuscado")
            mensagemErro.innerHTML = `O Título inserido não está correto.`
            console.log("Ocorreu um erro: ",undefined)
    }) */
}

function enviarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    let url = `http://www.omdbapi.com/?t=${filmes}&apikey=f2ea36dc`
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        if (data.Title!=undefined){
            alert(`O filme ${filmes} foi enviado com sucesso!`)
        } else {
            alert(`O Título do Filme está incorreto! Por favor, reenviar.`)
        }
    })
}

function limparFilme(){
    let form = document.querySelector("input#nomeFilme")
    let nome = document.querySelector("p#filmeBuscado")
    form.value = ""
    nome.innerHTML = "Informações do Filme."
}
