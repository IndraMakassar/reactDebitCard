function RateButton({ value, onSquareClick, pressed}) {
    return (
        <button className={pressed ? "w-12 h-12 border-2 bg-cyan-800 text-blue-50" : "w-12 h-12 border-2"} onClick={onSquareClick}>{value}</button>
    );
}

export default RateButton;