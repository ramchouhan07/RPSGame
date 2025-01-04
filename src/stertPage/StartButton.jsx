const StartButton = ({ onhandler })=>{
  
    const start = ()=>{
       
        onhandler();
       
    }
    return(<>
    <div className="-bottom-1/4 flex   justify-center items-center   mt-12 ">
            <button onClick={start} className=" h-full w-[60%] text-8xl bg-blue-500 text-white px-8 py-4  font-bold rounded-lg transition-all duration-300 ease-in-out border-2 border-transparent shadow-md cursor-pointer hover:scale-105 hover:opacity-90 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-black-300">
                START
            </button>

            </div>
    </>)
}
export default StartButton;