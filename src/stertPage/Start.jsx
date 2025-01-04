
import StartButton from "./StartButton";

const StartPage = ({ onHandler })=>{

    return (<>
    <div className="  justify-center items-center grid    ">
        <div className="h-screen w-screen bg-gradient-to-r from-purple-400 via-blue-500 to-red-500   grid ">
            <div className=" text-center ">
                <h1 className=" relative h-full font-extrabold text-8xl mt-14  ">WEL-COME TO MY GAME</h1>
            </div>
            {/* ROCK PAPERE SCISSER */}
             <div className=" text-center h-52 mt-20 mb-0  xl:flex  ">
            <button className="m-4 text-6xl h-full w-[60%] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3  font-semibold rounded-full transition-all duration-300 ease-in-out shadow-lg cursor-pointer hover:scale-110 hover:opacity-80 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300">
             ROCK
             </button>
             <button className="m-4 text-6xl h-full w-[60%] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3  font-semibold rounded-full transition-all duration-300 ease-in-out shadow-lg cursor-pointer hover:scale-110 hover:opacity-80 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300">
             PAPER
             </button>
             <button className="m-4 text-6xl h-full w-[60%] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3  font-semibold rounded-full transition-all duration-300 ease-in-out shadow-lg cursor-pointer hover:scale-110 hover:opacity-80 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300">
             SCISSOR
             </button>
             
            </div>   
            {/* start button */}
         <div><StartButton onhandler = { onHandler } /></div>
        </div>
     
    </div>

    </>)
}
export default StartPage;