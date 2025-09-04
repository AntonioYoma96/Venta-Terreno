  $(document).ready(function () {
    // cada vez que se cierre un modal
    $('.modal').on('hidden.bs.modal', function () {
      var $iframe = $(this).find('iframe');
      // reinicia el video reseteando el src
      $iframe.attr('src', $iframe.attr('src'));
    });
  });

