function RateButton({ value, onSquareClick, pressed}) {
    return (
        <button className={pressed ? "w-12 h-12 m-4 border-2 bg-cyan-800" : "w-12 h-12 m-4 border-2"} onClick={onSquareClick}>{value}</button>
    );
}

export default RateButton;