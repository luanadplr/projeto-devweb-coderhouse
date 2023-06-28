

function buscarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    let url = `http://www.omdbapi.com/?t=${filmes}&apikey=f2ea36dc`
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {
                let filmeBuscado = document.getElementById("filmeBuscado")
                filmeBuscado.append(` ${data.Title} - Produzido em: ${data.Country}`)
                console.log("Dados da API: ",data)
        })

        /*   
        
        AJUSTAR O ERROR E O REPETIDO

        catch(e){
            let mensagemErro = document.querySelector("p#filmeBuscado")
            mensagemErro.innerHTML = `O Título inserido não está correto.`
            console.log("Ocorreu um erro: ", error)
        }

        */
}
function enviarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    let filmeEnviado = document.getElementById("filmeEnviado")
    alert(`O filme ${filmes} foi enviado com sucesso!`)

}