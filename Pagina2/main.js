const list_txt_megustas = document.querySelectorAll("#txtMegusta");
var contadores = [1,1,1];

function AumentarLikes(indice)
{
    contadores[indice]++;
    list_txt_megustas[indice].innerText = contadores[indice] +" like(s)";
}
