//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Counter from "./component/Counter.jsx";

let a = 0;
setInterval(() => {
    a++;
    const one = a;
    const two = 0;
    const three = 0;
    const four = 0;
    if (a < 10) {
       one = a;
       two = 4;
    };
    //else if (a < 100 ){
    //    one = a % 10;
    //    
    // }
    ReactDOM.render(<Counter digito1={one} digito2={two} digito3={three} digito4={four} />, document.querySelector("#app"));
}, 1000);

//render your react application
