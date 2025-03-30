import './App.css'

function App() {

  return (
    <>
      <div className="bg-gradient-to-tr from-stone-900 to-zinc-900 min-h-screen flex justify-center w-[100%] h-[100%]">
        <div className="w-[90%] md:w-[60%] min-h-[300px] flex flex-col justify-top items-center md:shadow-2xl md:border-t-0 md:border-b-0 md:border-1 md:border-amber-600 pt-[40px]">
          <div className="flex justify-center items-center text-center sm:gap-5 md:gap-10 flex-wrap">
          <h1 className="font-bold text-[30px] md:text-[68px] text-white select-none">RAIDER IN KOREA</h1>
          <img src="kr.png" width="120px"></img>
          </div>

          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <a href="https://www.twitch.tv/raidergo" target="_blank"><img src="twitch.png" width="24px"></img></a>
          <a href="https://www.twitch.tv/raidergo" target="_blank" className="text-white font-bold">Twitch.tv/RaiderGO</a>
          </div>
          <div className="pt-[30px]">
          <img className="animate-pulse" src="favicon.png" width="100px"></img>
          </div>

            <div className="text-center text-white text-xs md:text-sm pt-[30px] font-semibold">
              <p>Arrived at 16. March 2025.</p>
              <p>I will be staying between 60 and 90 days.</p>
            </div>

            <div className="text-[10px] text-center md:text-start md:text-[16px]">

            <div className="flex gap-5 justify-between items-center mt-[30px]">
                <div className="flex items-center gap-5">
                <img src="twitch.png" width="40px"></img>
                <p className="text-white">Streaming daily grind on Korean server</p>
                </div>

                <a href="https://www.twitch.tv/raidergo" target="_blank"><button className="w-[120px] bg-[#9146ff]">FOLLOW ME</button></a>
              </div>

              <div className="flex gap-5 justify-between items-center mt-[30px]">
                <div className="flex items-center gap-5">
                <img className="rounded-md"src="opgg.png" width="40px"></img>
                <p className="text-white">My Korean account OP.GG</p>
                </div>

                <a href="https://www.op.gg/summoners/kr/RaiderGO-TWTV2" target="_blank"><button className="w-[120px] bg-[#396af7]">OP.GG</button></a>
              </div>

              <div className="flex gap-5 justify-between items-center mt-[30px]">
                <div className="flex items-center gap-5">
                <img className="rounded-md"src="discord.png" width="40px"></img>
                <p className="text-white">Join my discord server</p>
                </div>

                <a href="https://discord.com/invite/M4yQ7HnfAQ" target="_blank"><button className="w-[120px] bg-[#8ca4f4]">CONNECT</button></a>
              </div>





            </div>

            <div className="p-[20px] flex justify-end items-end h-full">
              <p className="text-white text-[12px]">Made with love by <a className="text-amber-400 font-bold" href="https://github.com/RubaDevYT" target="_blank">Front</a> 🖤</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default App
