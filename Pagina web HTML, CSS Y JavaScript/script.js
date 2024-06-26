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



function MostrarFecha(){

    let date = new Date();
    let dia = date.toLocaleString('es-es', {weekday:'long'});
    let numDia = date.getDate();
    let mes = date.toLocaleString("es-es", {month: "long"});
    let ano = date.getFullYear();


    document.fecha.fec.value=dia + ", " + numDia + " de "+ mes + " de " + ano + " ";
}

if (document.getElementById("portada")){
    MostrarFecha();
}

if (document.getElementById("portadaContacto")){
    MostrarHora();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const palabraH = document.getElementById('palabraH');
    const palabraM = document.getElementById('palabraM');
    const menuH = document.getElementById('menuHombre');
    const menuM = document.getElementById("menuMujer");
    const menuG = document.getElementById("menuGenerico");
    const img = document.querySelectorAll(".imagen");

    palabraH.addEventListener('click', (e) => {
        const rect = palabraH.getBoundingClientRect();
        menuH.style.top = `${rect.bottom + window.scrollY}px`;
        menuH.style.left = `${rect.left + window.scrollX}px`;
        menuH.style.display = 'block';
    });

    palabraM.addEventListener('click', (e) => {
        const rect = palabraM.getBoundingClientRect();
        menuM.style.top = `${rect.bottom + window.scrollY}px`;
        menuM.style.left = `${rect.left + window.scrollX}px`;
        menuM.style.display = "block";
    });
    

    document.addEventListener('click', (e) => {
        if (!menuH.contains(e.target) && e.target !== palabraH) {
            menuH.style.display = 'none';
        }
        if (!menuM.contains(e.target) && e.target !== palabraM) {
            menuM.style.display = 'none';
        }
    });

    img.forEach(imagen => {
        imagen.addEventListener('mouseover', (e) => {
            const rect = imagen.getBoundingClientRect();
            menuG.style.top = `${rect.bottom + window.scrollY}px`;
            menuG.style.left = `${rect.left + window.scrollX}px`;
            menuG.style.display = 'flex';
        });

        imagen.addEventListener('mouseout', (e) => {
            if (!menuG.contains(e.relatedTarget)) {
                menuG.style.display = 'none';
            }
        });
    });

    menuG.addEventListener('mouseleave', (e) => {
        menuG.style.display = 'none';
    });
});

