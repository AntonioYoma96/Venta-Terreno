  $(document).ready(function () {
    // cada vez que se cierre un modal
    $('.modal').on('hidden.bs.modal', function () {
      var $iframe = $(this).find('iframe');
      // reinicia el video reseteando el src
      $iframe.attr('src', $iframe.attr('src'));
    });
  });
  
  document.getElementById("contacto-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita la recarga de página

  const form = event.target;
  const data = new FormData(form);

  fetch("/", {
    method: "POST",
    body: data
  })
  .then(() => {
    form.reset(); // Limpia el formulario
    const mensaje = document.getElementById("mensaje-confirmacion");
    mensaje.style.display = "block"; // Muestra el mensaje
    // Oculta el mensaje después de 5 segundos
    setTimeout(() => mensaje.style.display = "none", 5000);
  })
  .catch((error) => console.error("Error al enviar el formulario:", error));
});