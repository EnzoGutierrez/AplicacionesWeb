document.addEventListener("DOMContentLoaded", () => {
    const ingresoBtn = document.getElementById("ingresoBtn");
    const ingresoVentana = document.getElementById("ingresoVentana");
    const cerrarBtn = document.getElementsByClassName("cerrarBtn")[0];

    ingresoBtn.onclick = function() {
        ingresoVentana.style.display = "block";
    }

    cerrarBtn.onclick = function() {
        ingresoVentana.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == ingresoVentana) {
            ingresoVentana.style.display = "none";
        }
    }
});

function MostrarHora(){

    let Digital = new Date();
    let hora = Digital.getHours();
    let minutos = Digital.getMinutes();
    let segundos = Digital.getSeconds();
    let a = "AM"

    

    if(segundos <= 9) {
        segundos = "0" + segundos;
    }

    if(minutos <= 9) {
        minutos = "0" + minutos;
    }

    if(hora>12){
        a = "PM";
        hora = hora - 12;
    }

    if(hora==0){
        hora=12;
    }

    document.reloj.Re.value=hora + ":" + minutos + ":" + segundos + " " + a;


    setTimeout("MostrarHora()",1000);
}

if (document.getElementById("filtros")){
    MostrarHora();
}

function MostrarFecha(){

    let date = new Date();
    let dia = date.toLocaleString('es-es', {weekday:'long'});
    let numDia = date.getDate();
    let mes = date.toLocaleString("es-es", {month: "long"});
    let ano = date.getFullYear();


    document.fecha.fec.value=dia + ", " + numDia + " de "+ mes + " de " + ano + " ";
}

if (document.getElementById("encabezado")){
    MostrarFecha();
}