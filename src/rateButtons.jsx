import {useState} from "react";
import RateButton from "./rateButton";

function RateButtons() {
    const [pressed, setPressed] = useState([Array(5).fill(null)]);

    function handleClick(i) {
        const newPressed = Array(5).fill(false);
        newPressed[i] = true;
        setPressed(newPressed);
    }

    return (
        <>
            <RateButton value={"1"} pressed={pressed[1]} onSquareClick={() => handleClick(1)}/>
            <RateButton value={"2"} pressed={pressed[2]} onSquareClick={() => handleClick(2)}/>
            <RateButton value={"3"} pressed={pressed[3]} onSquareClick={() => handleClick(3)}/>
            <RateButton value={"4"} pressed={pressed[4]} onSquareClick={() => handleClick(4)}/>
            <RateButton value={"5"} pressed={pressed[5]} onSquareClick={() => handleClick(5)}/>
        </>
    );
}


export default RateButtons;