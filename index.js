const navToggle = document.querySelector(".nav-toggle"); //Seleccionamos al elemento que tiene la clase ".nav-toggle".
const navMenu = document.querySelector(".nav-menu"); //Seleccionamos al elemento que tiene la clase ".nav-menu".

navToggle.addEventListener("click", () => { //Escuchamos el evento "Click" del botón del "toggle" (menú hamburguesa).
  navMenu.classList.toggle("nav-menu_visible"); /* El método "toggle" lo que hace es que si está la clase "nav-menu_visible" entonces la quitará, pero si no está la clase "nav-menu_visible" entonces la pondrá.*/

  if(navMenu.classList.contains("nav-menu_visible")){ /* Si el elemento que tiene la clase ".nav-menu" tiene también la clase "nav-menu_visible" entonces hará tal cosa... */
    //El "aria-label" es para que el dispositivo de una persona con discapacidad pueda leerle a la persona la acción que ejecuta el botón que está seleccionando */
   
    navToggle.setAttribute("aria-label", "Cerrar menú"); /* Le asignaremos a la propiedad HTML llamada "aria-label" un valor que será "Cerrar menú". */
  } 
  else{ /* Si el elemento que tiene la clase ".nav-menu" no tiene también la clase "nav-menu_visible" entonces harás tal cosa... */
    navToggle.setAttribute("aria-label", "Abrir menú"); /* Le asignaremos a la propiedad HTML llamada "aria-label" un valor que será "Abrir menú". */
  }
});