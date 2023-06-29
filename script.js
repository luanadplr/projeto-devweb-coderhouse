
/*


        function incricao() {
            let email = document.getElementById("emailNews").value;
            alert("O email: " + email + " está inscrito!")
        }


*/


var links = new Array(26)
links[0] = "paginas_norte/norteFilme_1.html"
links[1] = "paginas_norte/norteFilme_2.html"
links[2] = "paginas_norte/norteFilme_3.html"
links[3] = "paginas_norte/norteFilme_4.html"
links[4] = "paginas_norte/norteFilme_5.html"
links[5] = "paginas_norte/norteFilme_6.html"
links[6] = "paginas_nordeste/filmes_nordeste/deus_brasileiro.html"
links[7] = "paginas_nordeste/filmes_nordeste/bacurau.html"
links[8] = "paginas_nordeste/filmes_nordeste/o_pai_o.html"
links[9] = "paginas_nordeste/filmes_nordeste/aquarius.html"
links[10] = "paginas_nordeste/filmes_nordeste/auto_compadecida.html"
links[11] = "paginas_centroOeste/filmes_centrooeste/dias-vazios.html"
links[12] = "paginas_centroOeste/filmes_centrooeste/fogareu.html"
links[13] = "paginas_centroOeste/filmes_centrooeste/madalena.html"
links[14] = "paginas_centroOeste/filmes_centrooeste/mato-seco-em-chamas.html"
links[15] = "paginas_centroOeste/filmes_centrooeste/vermelha.html"
links[16] = "paginas__sudeste/filmes_sudeste/c-elas.html"
links[17] = "paginas__sudeste/filmes_sudeste/desenforme.html"
links[18] = "paginas__sudeste/filmes_sudeste/divinasDivas.html"
links[19] = "paginas__sudeste/filmes_sudeste/marteUm.html"
links[20] = "paginas__sudeste/filmes_sudeste/queHorasElaVolta.html"
links[21] = "paginas__sul/filmes_sul/a_cabeça_de_guimercindo_saraiva.html"
links[22] = "paginas__sul/filmes_sul/anahy_de_las_missiones.html"
links[23] = "paginas__sul/filmes_sul/netto_perde_sua_alma.html"
links[24] = "paginas__sul/filmes_sul/o_homem_que_copiava.html"
links[25] = "paginas__sul/filmes_sul/os_famosos_e_os_duendes_da_morte.html"

function aleatorio(){
    var numero = Math.round(Math.random()*25)
    location.href=links[numero]
}

function verde(){
    document.body.style.backgroundColor = '#24F27B'
}

function laranja(){
    document.body.style.backgroundColor = 'rgb(255, 172, 84)'
}

function amarelo(){
    document.body.style.backgroundColor = '#E5FE52'
}

function lilas(){
    document.body.style.backgroundColor = '#FACAFF'
}

function azul(){
    document.body.style.backgroundColor = '#8CDDFF'
}

function branco() {
    document.body.style.backgroundColor = '#FFFFFF'
}


// imgNorte mapa mapaHover
// imgNordeste mapa mapaHover
// imgcentroOeste mapa mapaHover
// imgSudeste mapa mapaHover
// imgSul mapa mapaHover