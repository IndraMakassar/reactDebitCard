import GPN from "./Gerbang_Pembayaran_Nasional_logo.svg"
import Chip from "./chip.png"
function cardFront({onClickCard, putar}) {
    return(
      <div className={"absolute aspect-[1.586] bg-amber-300 w-96 flex flex-col justify-between p-5 font-sans rounded-2xl" +
          `transition-all duration-300 preserve-3d backface-hidden z-10 ${putar? 'z-0 my-rotate-y-180' : 'z-10'}` } onClick={onClickCard}>
          <div>
            <span className={"italic text-xl"}>Tahapan Xpresi BCA</span>
            <span className={"ml-2"}>debit</span>
          </div>
          <div>
              <img className={"h-10"} src={Chip} alt=""/>
          </div>
          <div>
            <img className={"h-10 absolute ml-80"} src={GPN} alt="logo GPN"/>
            <span className={"text-center text-2xl"}>Antonius I Dharma Prasetya</span>
          </div>
      </div>
    );
}

export default cardFront;