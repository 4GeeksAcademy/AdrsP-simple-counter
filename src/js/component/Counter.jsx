import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Counter = (props) =>{
    return(
        <div>
            <div>Reloj</div>
            <div>{props.digito1}</div>
            <div>{props.digito2}</div>
            <div>{props.digito3}</div>
            <div>{props.digito4}</div>
        </div>
    );
};

Counter.propTypes = {
    digito1: PropType.number,
    digito2: PropType.number,
    digito3: PropType.number,
    digito4: PropType.number,
}

export default Counter;

