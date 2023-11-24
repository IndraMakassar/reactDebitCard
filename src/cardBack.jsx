function cardBack() {
    return (
        <div className={"absolute aspect-[1.586] bg-blue-400 w-96 flex flex-col font-sans rounded-2xl"} onClick={onClickCard}>
            <span className={"text-xs p-2"}>PT Bank Central Asia, Tbk</span>
            <div className={"bg-gray-950 h-10 w-96"}/>
        </div>
    );
}

export default cardBack;