let cc = document.getElementById("pres");
let cc2 = document.getElementById("pres2");
let cc3 = document.getElementById("pres3");
let cc4 = document.getElementById("pres4");
let cc5 = document.getElementById("pres5");
let cc6 = document.getElementById("pres6");
let cc7 = document.getElementById("pres7");
let cc8 = document.getElementById("pres8");
let cc9 = document.getElementById("pres9");
let cc10 = document.getElementById("pres10");
let cc11 = document.getElementById("pres10");
let cc12 = document.getElementById("pres10");
let cc13 = document.getElementById("pres10");
let cc14 = document.getElementById("pres10");
let pilares = document.getElementById("IDpilares");
let dif = document.getElementById("dif");
let dif2 = document.getElementById("dif2");
let dif3 = document.getElementById("dif3");
let dif4 = document.getElementById("dif4");
let dif5 = document.getElementById("dif5");
let dif6 = document.getElementById("dif6");
let dif7 = document.getElementById("dif7");
let dif8 = document.getElementById("dif8");
let dif9 = document.getElementById("dif9");
let dif10 = document.getElementById("dif10");
let dif11 = document.getElementById("dif11");
let dif12 = document.getElementById("dif12");
let dif13 = document.getElementById("dif13");
let dif14 = document.getElementById("dif14");
let dif15 = document.getElementById("dif15");


let op=0,op2=0,op3=0;


const centrosComunitarios = () => {
    if(op === 0){
        cc.style.display = "flex";
        cc2.style.display = "flex";
        cc3.style.display = "flex";
        cc4.style.display = "flex";
        cc5.style.display = "flex";
        cc6.style.display = "flex";
        cc7.style.display = "flex";
        cc8.style.display = "flex";
        cc9.style.display = "flex";
        cc10.style.display = "flex";
        cc11.style.display = "flex";
        cc12.style.display = "flex";
        cc13.style.display = "flex";
        cc14.style.display = "flex";
        op = 1;
        op2 = 1;
        op3 = 1;
        centrosPilares();
        centrosDIF();
    }
    else{
        cc.style.display = "none";
        cc2.style.display = "none";
        cc3.style.display = "none";
        cc4.style.display = "none";
        cc5.style.display = "none";
        cc6.style.display = "none";
        cc7.style.display = "none";
        cc8.style.display = "none";
        cc9.style.display = "none";
        cc10.style.display = "none";
        cc11.style.display = "none";
        cc12.style.display = "none";
        cc13.style.display = "none";
        cc14.style.display = "none";
        op=0;
    }
}

const centrosPilares = () => {
    if(op2 === 0){
        pilares.style.display = "flex";
        op2 = 1;
        op = 1;
        op3 = 1;
        centrosComunitarios();
        centrosDIF();
        console.log("display")
    }else{
        pilares.style.display = "none";
        op2 = 0;
    }
}

const centrosDIF = () => {
    if(op3 === 0){
        dif.style.display = "flex";
        dif2.style.display = "flex";
        dif3.style.display = "flex";
        dif4.style.display = "flex";
        dif5.style.display = "flex";
        dif6.style.display = "flex";
        dif7.style.display = "flex";
        dif8.style.display = "flex";
        dif9.style.display = "flex";
        dif10.style.display = "flex";
        dif11.style.display = "flex";
        dif12.style.display = "flex";
        dif13.style.display = "flex";
        dif14.style.display = "flex";
        dif15.style.display = "flex";
        op = 1;
        op2 = 1;
        op3 = 1;
        centrosPilares();
        centrosComunitarios();
    }
    else{
        dif.style.display = "none";
        dif2.style.display = "none";
        dif3.style.display = "none";
        dif4.style.display = "none";
        dif5.style.display = "none";
        dif6.style.display = "none";
        dif7.style.display = "none";
        dif8.style.display = "none";
        dif9.style.display = "none";
        dif10.style.display = "none";
        dif11.style.display = "none";
        dif12.style.display = "none";
        dif13.style.display = "none";
        dif14.style.display = "none";
        dif15.style.display = "none";
        op3=0;
    }
}

