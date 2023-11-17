import React from "react";
import PropType from "prop-types";

const Countdown = (props) => {
    return (
        <div className="bigDiv d-flex justify-content-center pt-1">
            <div className="casilla text-white m-1 rounded" ><i class="fa-solid fa-clock"></i></div>
            <div className="casilla text-white m-1 rounded">{props.digito6}</div>
            <div className="casilla text-white m-1 rounded">{props.digito5}</div>
            <div className="casilla text-white m-1 rounded">{props.digito4}</div>
            <div className="casilla text-white m-1 rounded">{props.digito3}</div>
            <div className="casilla text-white m-1 rounded">{props.digito2}</div>
            <div className="casilla text-white m-1 rounded">{props.digito1}</div>
        </div>
    );
};

Counter.propTypes = {
    digito1: PropType.number,
    digito2: PropType.number,
    digito3: PropType.number,
    digito4: PropType.number,
    digito5: PropType.number,
    digito6: PropType.number,
}

export default Counter;