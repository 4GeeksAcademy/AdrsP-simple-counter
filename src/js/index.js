//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Counter from "./component/Counter.jsx";

let numRegresivo = document.querySelector("#cuentaRegresiva").value;


if (numRegresivo == "") {
    let a = 0;
setInterval(() => {
    a++;
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;

    if (a < 10) {
       one = a;
    }
    else if (a < 100 ){
        one = a % 10;
        two = Math.trunc(a / 10);  
    }
    else if (a < 1000){
        one = a % 10;
        two = Math.trunc((a % 100) / 10);  
        three = Math.trunc(a / 100);
    }
    else if (a < 10000){
        one = a % 10;
        two = Math.trunc(((a % 1000) % 100) / 10);  
        three = Math.trunc((a % 1000) / 100);
        four = Math.trunc(a / 1000);
    }
    else if (a < 100000){
        one = a % 10;
        two = Math.trunc((((a % 10000) % 1000) % 100) / 10);  
        three = Math.trunc(((a % 10000) % 1000) / 100);
        four = Math.trunc((a % 10000) / 1000);
        five = Math.trunc(a / 10000)
    }
    else if (a < 1000000){
        one = a % 10;
        two = Math.trunc(((((a % 100000) % 10000) % 1000) % 100) / 10);  
        three = Math.trunc(((a % 100000) % 10000) % 1000 / 100);
        four = Math.trunc(((a % 100000) % 10000) / 1000);
        five = Math.trunc((a % 100000) / 10000);
        six = Math.trunc(a / 100000);
    }
    ReactDOM.render(<Counter digito1={one} digito2={two} digito3={three} digito4={four} digito5={five} digito6={six} />, document.querySelector("#app"));
}, 1000);
//Para probar de manera mas eficiente cambie el tiempo del intervalo segun convenga 1000 = para digito 4,
// 100 para digito 3, 10 para digito 2 y 1 para digito 1
//render your react application
}
    function cuentaRegresiva (){
            let aux = document.querySelector("#cuentaRegresiva").value;
            let aux2 = aux.toString();
            console.log(aux2.length);
        setInterval(() => {
            aux--;
            console.log(aux);
        },1000);
    }
    document.querySelector("#countdownButton").addEventListener("click",cuentaRegresiva)

