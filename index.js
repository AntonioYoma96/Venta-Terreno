  $(document).ready(function () {
    // cada vez que se cierre un modal
    $('.modal').on('hidden.bs.modal', function () {
      var $iframe = $(this).find('iframe');
      // reinicia el video reseteando el src
      $iframe.attr('src', $iframe.attr('src'));
    });
  });
  
  const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => alert("Thank you for your submission"))
    .catch(error => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);