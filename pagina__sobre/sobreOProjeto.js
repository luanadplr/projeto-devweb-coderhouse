
/*

    function incricao() {
        let email = document.getElementById("emailNews").value;
        alert("O email: " + email + " está inscrito!")
    }


*/

function buscarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    let url = 'http://www.omdbapi.com/?t=' + filmes + '&apikey=f2ea36dc'
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let filmeBuscado = document.getElementById("filmeBuscado")

            filmeBuscado.append(data.Title)

            console.log("Dados da API: ", data.Title)

        })

        .catch(error => {

            console.log("Ocorreu um erro: ", error);

        });
}

function enviarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    let filmeEnviado = document.getElementById("filmeEnviado")
    alert("O filme: " + filmes + " foi enviado!")

}