onload = () =>{
    document.body.classList.remove("container");
};

const bee = document.querySelector(".bee");

let beeTime = 0;

function animateBee() {

    if (!bee) return;

    beeTime += 0.012;

    /*
      Movimiento principal:
      una órbita alrededor de las flores.
      Los valores cambian ligeramente todo el tiempo
      para que no parezca un círculo perfecto.
    */

    const radiusX =
        125 +
        Math.sin(beeTime * 1.7) * 25;

    const radiusY =
        80 +
        Math.cos(beeTime * 1.3) * 18;


    /*
      Posición de la abeja
    */

    const x =
        Math.cos(beeTime) * radiusX;

    const y =
        Math.sin(beeTime) * radiusY
        +
        Math.sin(beeTime * 3) * 10;


    /*
      Calculamos hacia dónde está volando
      para inclinar ligeramente la abeja.
    */

    const dx =
        -Math.sin(beeTime) * radiusX;

    const dy =
        Math.cos(beeTime) * radiusY;


    let angle =
        Math.atan2(dy, dx) *
        180 /
        Math.PI;


    /*
      No dejamos que gire completamente.
      Solo se inclina suavemente.
    */

    angle *= 0.18;


    /*
      Pequeño movimiento de aleteo.
    */

    const flutter =
        1 +
        Math.sin(beeTime * 15) * 0.035;


    bee.style.transform = `
        translate(
            calc(-50% + ${x}px),
            calc(-50% + ${y}px)
        )
        rotate(${angle}deg)
        scale(${flutter})
    `;


    requestAnimationFrame(animateBee);
}


animateBee();

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("iniciar-musica");

if (musica && botonMusica) {

    botonMusica.addEventListener("click", async () => {

        try {

            musica.volume = 0.7;

            await musica.play();

            botonMusica.classList.add("ocultar-boton");

            setTimeout(() => {
                botonMusica.style.display = "none";
            }, 600);

        } catch (error) {

            console.error("No se pudo reproducir el audio:", error);

        }

    });

}