let menuVisible = false;

// Function to show/hide the menu
function mostrarOcultarMenu() {
  const navElement = document.getElementById("nav");
  if (menuVisible) {
    navElement.classList.remove("responsive");
  } else {
    navElement.classList.add("responsive");
  }
  menuVisible = !menuVisible;
}

// Function to hide the menu when an option is selected
function seleccionar() {
  document.getElementById("nav").classList.remove("responsive");
  menuVisible = false;
}

// Function to apply the animations to the skills section
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanciaSkills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("htmlcss");
    habilidades[6].classList.add("photoshop");
    habilidades[7].classList.add("wordpress");
    habilidades[8].classList.add("drupal");
    habilidades[9].classList.add("comunicacion");
    habilidades[10].classList.add("Teamwork");
    habilidades[11].classList.add("Creativity");
    habilidades[12].classList.add("Dedication");
    habilidades[13].classList.add("Project");
  }
}

// Event listener to apply the skills animation on scroll
window.addEventListener("scroll", efectoHabilidades);
