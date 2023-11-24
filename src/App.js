import './App.css';
import RateButtons from "./rateButtons";
import CardFront from "./cardFront";
import CardBack from "./cardBack";
import {useState} from "react";

function App() {
    const [putar, setPutar] = useState(false);

    function handleClick(i) {
        setPutar(!putar);
    }

    return (
        <div className={"p-8"}>
            <div className={"aspect-[1.586] w-96"}>
            <CardBack onClickCard={() => handleClick()} putar={putar} />
            <CardFront onClickCard={() => handleClick()} putar={putar} />
            </div>
            <div className={"mt-5"}>
            <RateButtons />
            </div>
        </div>
    );
}

export default App;
