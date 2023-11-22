import {useState} from "react";
import RateButton from "./rateButton";

function RateButtons() {
    const [pressed, setPressed] = useState([Array(5).fill(null)]);

    function handleClick(i) {
        const newPressed = Array(5).fill(false);
        for (let j = 1; j <= i; j++) {
            newPressed[j] = true;
        }
        setPressed(newPressed);
    }

    return (
        <div className={"w-96 h-20 flex flex-col text-center justify-between"}>
            <h1 className={"text-xl"}>Are you satisfied?</h1>
            <div className={"flex flex-row justify-around"}>
                <RateButton value={"1"} pressed={pressed[1]} onSquareClick={() => handleClick(1)}/>
                <RateButton value={"2"} pressed={pressed[2]} onSquareClick={() => handleClick(2)}/>
                <RateButton value={"3"} pressed={pressed[3]} onSquareClick={() => handleClick(3)}/>
                <RateButton value={"4"} pressed={pressed[4]} onSquareClick={() => handleClick(4)}/>
                <RateButton value={"5"} pressed={pressed[5]} onSquareClick={() => handleClick(5)}/>
            </div>
        </div>
    );
}


export default RateButtons;