import { useState } from "react";

export default function MainPageView() {
  const [title1, setTitle1] = useState(false);
  const [title2, setTitle2] = useState(false);
  const [title3, setTitle3] = useState(false);
  const [title4, setTitle4] = useState(false);

  return (
    <div className={`bg-white w-full h-screen overflow-hidden`}>
      {/* Top Div */}
      <div>
        <div className={`w-full h-[6rem] flex items-center px-[4rem] border-b-2 justify-between`}>
          <p className={`font-bold text-[1.5rem] font-serif`}>DooCanDoIt PortPolio</p>
          <p className={`font-bold text-[1.5rem] font-serif cursor-pointer hover:text-blue-500 duration-300 `}>Profile</p>
        </div>
      </div>
      {/* Bottom Div */}
      <div className={`flex flex-col w-full h-[calc(100vh-6rem)]`}>
        <div className={`flex justify-center w-full h-[19rem] items-center border-b-2 relative`} onMouseEnter={() => setTitle1(true)} onMouseLeave={() => setTitle1(false)}>
          <div className={`absolute bg-blue-500 h-[19rem] w-full transition-opacity duration-300 ${title1 ? "opacity-100" : "opacity-0"}`} />

          <p className={`text-[10rem] font-bold transition-transform duration-300 ${title1 ? "animate-fade-down-rotate" : "translate-y-0 opacity-100"}`}>Who I Am</p>

          <p
            className={`absolute text-[10rem] h-[19rem] overflow-hidden flex flex-col justify-center items-center w-full font-bold text-white transition-transform duration-300 ${title1 ? "translate-x-0 opacity-100 animate-loop-scroll" : "translate-x-[100%] opacity-0"}`}
          >
            My WorkStyle and Personality
          </p>
        </div>
        <div className={`flex justify-end w-full h-[19rem] items-center border-b-2 relative`} onMouseEnter={() => setTitle2(true)} onMouseLeave={() => setTitle2(false)}>
          <div className={`absolute bg-blue-500 h-[19rem] w-full transition-opacity duration-300 ${title2 ? "opacity-100" : "opacity-0"}`} />
          <p className={`text-[10rem] font-bold px-[20rem] transition-transform duration-500 ${title2 ? "animate-fade-down-rotate" : "translate-y-0 opacity-100"}`}>Tech Stack</p>
          <p
            className={`absolute text-[10rem] h-[19rem] overflow-hidden flex justify-center items-center w-full font-bold text-white transition-transform duration-500 ${title2 ? "translate-y-0 opacity-100 animate-loop-scroll" : "opacity-0"}`}
          >
            My Technologies Page
          </p>
        </div>
        <div className={`flex justify-start w-full h-[19rem] items-center border-b-2 relative`} onMouseEnter={() => setTitle3(true)} onMouseLeave={() => setTitle3(false)}>
          <div className={`absolute bg-blue-500 h-[19rem] w-full transition-opacity duration-300 ${title3 ? "opacity-100" : "opacity-0"}`} />
          <p className={`text-[10rem] px-[30rem] font-bold transition-transform duration-500 ${title3 ? "animate-fade-down-rotate" : "translate-y-0 opacity-100"}`}>FrontEnd</p>
          <p
            className={`absolute text-[10rem] h-[19rem] flex justify-center items-center w-full font-bold text-white transition-transform duration-500 ${title3 ? "translate-y-0 opacity-100 animate-loop-scroll" : "opacity-0"}`}
          >
            FrontEnd Project Page
          </p>
        </div>
        <div className={`flex justify-end w-full h-[18.5rem] items-center border-b-2 relative`} onMouseEnter={() => setTitle4(true)} onMouseLeave={() => setTitle4(false)}>
          <div className={`absolute bg-blue-500 h-[19rem] w-full transition-opacity duration-300 ${title4 ? "opacity-100" : "opacity-0"}`} />
          <p className={`text-[10rem] font-bold px-[20rem] transition-transform duration-500 ${title4 ? "animate-fade-down-rotate" : "translate-y-0 opacity-100"}`}>BackEnd</p>
          <p
            className={`absolute text-[10rem] h-[18.5rem] overflow-hidden flex justify-center items-center w-full font-bold text-white transition-transform duration-500 ${title4 ? "translate-y-0 opacity-100 animate-loop-scroll" : "opacity-0"}`}
          >
            BackEnd Project Page
          </p>
        </div>
      </div>
    </div>
  );
}
