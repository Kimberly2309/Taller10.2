// js/index.js
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const button = document.getElementById("buttonText");
  const mensaje = document.getElementById("mensaje");

  button.addEventListener("click", () => {
    const valor = input.value.trim();

    if (valor === "") {
      mostrarMensaje("Por favor, escribe algo antes de guardar.", "error");
      return;
    }

    // Guardar en localStorage
    localStorage.setItem("datoGuardado", valor);

    // Limpiar el campo después de guardar
    input.value = "";

    // Mostrar mensaje de éxito
    mostrarMensaje("¡Dato guardado correctamente!", "exito");
  });

  // Función para mostrar mensajes dinámicos
  function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
    mensaje.style.display = "block";

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);
  }
});