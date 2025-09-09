document.addEventListener("DOMContentLoaded", () => {
  const spanData = document.getElementById("data");
  const dato = localStorage.getItem("datoGuardado");
  if (dato) {
    spanData.textContent = dato;
  } else {
    spanData.textContent = "No hay datos guardados aún.";
  }
});