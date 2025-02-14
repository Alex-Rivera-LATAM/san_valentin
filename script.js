onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const flowersBtn = document.getElementById("flowersBtn");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none"; // Ocultar el botón de abrir
    closeBtn.style.display = "none"; // No mostrar el botón de cerrar
    flowersBtn.style.display = "inline-block"; // Mostrar el botón "Recibir flores"
});

flowersBtn.addEventListener("click", () => {
    location.href = "flowers.html"; // Redirigir a la página de flores
});

