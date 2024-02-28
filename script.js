let button = document.getElementById ("calculadora");
button.addEventListener("click", () => {
    const DATO = document.getElementById('peso').value
    console.log('dato ingresado: ', DATO)
})

function calcular () {
    console.log("click")
    const input = document.getElementById("peso");
    const PESO = parseInt (input.value);
    const CALCULAR = document.getElementById('calcular');
    const ERROR = document.getElementById('error');
    const FLU = document.getElementById('flu');
    const MAN = document.getElementById('man')

    if (peso <= 30 && peso>0){
        const volumendiario= HollidaySegaro(peso)
        const mantenimiento= Math.reoun(volumendiario/24);
        const MM2 = Math.round(mantenimiento * 1.5);
        FLU.innerHTML= mantenimiento+"cc/hr";
        MAN.innerHTML= "m+m/2:" + MM2 +"cc/hr";
        FLU.innerHTML= "block";
        MAN.innerHTML= "block";
    }

    else if (peso <=0){
        ERROR.style.display="block";
        input.value="";
    }
    else {    
        const SC1500=Match.round(superficieCorporal(peso)* 1500);
        const SC2000=Match.round(superficieCorporal(peso)* 2000);
        FLU.innerHTML="SC 1500:"+ SC1500+"cc";
        MAN.innerHTML="SC 2000:"+ SC2000+"cc";
        FLU.style.display="block";
        MAN.style.display="block";
    }
}
function HollidaySegar(peso){
    let volumendiario;
    if (peso<= 10){
        volumendiario=peso * 100;
    return
    }
    else if (peso>10&&peso<=20){ 
        volumendiario = 1000+((peso-10)*50);
        return
    }
    else if (peso <= 30){
        volumendiario = 1500+ ((peso-20)*20 );
        return
    }
    return volumendiario
}
function superficieCorporal(peso){
    let superficieCorporal=((peso*4)+ 7)/(peso + 90);
    return superficieCorporal
}



