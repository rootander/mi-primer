
document.addEventListener("DOMContentLoaded", () => {
   
    document.querySelectorAll(".leerMas").forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.getAttribute("data-contenido");
            const detalle = document.getElementById(id);
            if (detalle) {
                detalle.style.display = "block";
                boton.style.display = "none";
            }
        });
    });

   
    document.querySelectorAll(".leerMenos").forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.getAttribute("data-contenido");
            const detalle = document.getElementById(id);
            if (detalle) {
                detalle.style.display = "none";
                const botonLeerMas = document.querySelector(`.leerMas[data-contenido="${id}"]`);
                if (botonLeerMas) {
                    botonLeerMas.style.display = "inline-block";
                }
            }
        });
    });
});

