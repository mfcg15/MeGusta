const textMegusta = document.querySelector("#txtMegusta")
var contador = 1;

function AumentarLikes()
{
    contador++;
    textMegusta.innerText = contador +" like(s)";
}