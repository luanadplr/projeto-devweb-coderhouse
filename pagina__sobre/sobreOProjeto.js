
/*

    function incricao() {
        let email = document.getElementById("emailNews").value;
        alert("O email: " + email + " está inscrito!")
    }


*/

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f2ea36dc')
    .then(response => response.json())
    .then(response => enviarFilme(response))



function enviarFilme() {
    let filmes = document.getElementById("nomeFilme").value;
    alert("O filme: " + filmes + " foi enviado!")
}