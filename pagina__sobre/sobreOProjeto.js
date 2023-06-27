
/*

    function incricao() {
        let email = document.getElementById("emailNews").value;
        alert("O email: " + email + " está inscrito!")
    }


*/

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=934ce73f')
.then(response => response.json())

let filmes = document.querySelector("input#nomeFilme")
function enviarFilme(){
    alert(filmes.value)
}