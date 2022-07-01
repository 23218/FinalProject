const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

const validate = () => {
    //console.log("Success");
    clear();
    let errorFlag = false;
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Nombre no puede estar vacío";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Correo electrónico inválido";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Por favor ingrese un mensaje";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Mensaje enviado con éxito!"
    }
}

const clear = () => {
    for(let i = 0 ; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    success.innerText = "";
}

const emailIsValid = (email) => {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

