
let IndexPregunta = 0, puntaje = 0;


function LoadQuestion(index){
        obj = preguntas[index];
        ops = [...obj.respuestaIncorrecta];
        ops.push(obj.respuestaCorrecta);

    for (let index = 0; index < 4; index++) {
        ops.sort(() => Math.random() - 0.5);       
    }

    document.getElementById("pregunta").innerHTML = obj.pregunta;
    if(obj.imagen){
        document.getElementById("imagen").src = obj.imagen;
    }else{
        document.getElementById("imagen").style.display = "none";
    }
    document.getElementById("opcion-1").innerHTML = ops[0];
    document.getElementById("opcion-2").innerHTML = ops[1];
    document.getElementById("opcion-3").innerHTML = ops[2];
    document.getElementById("opcion-4").innerHTML = ops[3];
}

async function seleccionarOpcion(index){
    let resCorrecta = ops[index] == obj.respuestaCorrecta;
    if(resCorrecta){
        await Swal.fire({
            title: "Respuesta Correcta",
            text: `Recuerda que puedes acceder a las pistas en el boton: "¿Quieres una Pista?"`,
            confirmButtonText: "Continuar",
            icon: "success",
            width: '900px'
        });
        puntaje++;
    }else{
       await Swal.fire({
            title: "Respuesta Incorrecta",
            text: `La respuesta correcta es: "${obj.respuestaCorrecta}", Puedes acceder a las pistas en el boton: "¿Quieres una Pista?"`,
            confirmButtonText: "Continuar",
            icon: "error",
            width: '900px'
        });
    }
    IndexPregunta++;
    if(IndexPregunta >= preguntas.length){
        await Swal.fire({
            title: "Juego Terminado," + ` Tu puntaje fue: ${puntaje} / ${preguntas.length}`,
            text:"Ahora sabes un poco más hacerca del ODS 4 y como se encuentra la educación en méxico, vuelve a intentarlo y mejora tu puntuación", 
            confirmButtonText: "Aceptar",
            width: '900px'
        });
        IndexPregunta = 0;
        puntaje = 0;
    }
        LoadQuestion(IndexPregunta);
}

function ayuda(){
    Swal.fire({
        title: "Aqui tienes un poco de información",
        text: obj.ayuda,
        imageUrl: obj.ayudaImg,
        imageHeight: 200,
        imageWidth: 200,
        width: '900px'
      });
}
LoadQuestion(0);