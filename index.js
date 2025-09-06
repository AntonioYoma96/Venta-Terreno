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

  // Captura de datos y envío usando fetch
  const form = event.target;
  const data = new FormData(form);

  fetch("/", {
    method: "POST",
    body: data
  })
  .then(() => {
    // Muestra mensaje de confirmación
    document.getElementById("mensaje-confirmacion").style.display = "block";
    // Limpia el formulario
    form.reset();
  })
  .catch((error) => alert("Ocurrió un error al enviar el formulario: " + error));
});