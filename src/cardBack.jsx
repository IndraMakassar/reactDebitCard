import Chip from "./chip.png";
import GPN from "./Gerbang_Pembayaran_Nasional_logo.svg";

function cardBack() {
    return (
        <div>
            <div className={"aspect-[1.586] bg-blue-400 w-96 flex flex-col font-sans rounded-2xl"}>
                <span className={"text-xs p-2"}>PT Bank Central Asia, Tbk</span>
                <div className={"bg-gray-950 h-10 w-96"} />
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default cardBack;