function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tive light mode, adiciuonar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Imagem de Chico boarte sorrindo na foto, deixe como foto de perfil")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Imagem de Chico boarte sério, depois que se clica no botão de tema")
  }
}
