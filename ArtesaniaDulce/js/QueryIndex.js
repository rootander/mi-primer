        $(document).ready(function () {
            $(".leerMas").click(function () {
              let contenidoId = $(this).data("contenido");
              $("#" + contenidoId).slideDown();
              $(this).hide();
            });
        
            $(".leerMenos").click(function () {
              let contenidoId = $(this).data("contenido");
              $("#" + contenidoId).slideUp();
              $(".leerMas[data-contenido='" + contenidoId + "']").show();
            });
          });
