function clicar() {
  const ppm = parseFloat(document.querySelector("input").value);

  const resultado = (ppm * 2) / 1000;
  document.querySelector(".resultado").innerHTML = resultado + " EC";
}
