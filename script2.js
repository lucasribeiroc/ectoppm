function clicar() {
  const ec = parseFloat(document.querySelector("input").value);

  const resultado = (ec * 1000) / 2;
  document.querySelector(".resultado").innerHTML = resultado + " PPM";
}
