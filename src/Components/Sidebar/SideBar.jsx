import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "../../index.css";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  const { data, prePrompts, newChat, setRecentPrompt } = useContext(Context);
  const loadPrompt = async prompt => {
    setRecentPrompt(prompt);
    await data(prompt);
  };
  return (
    <main className="  max-md:hidden  sidebar min-h-[100vh]    flex-col justify-between bg-[#f0f4f9] inline-flex p-[25px]   font-outfit ">
      <div className="top">
        <img
          onClick={() => setExtended(pre => !pre)}
          className=" block ml-[10px] cursor-pointer "
          width={20}
          height={21}
          src={assets.menu_icon}
          alt="menu"
        ></img>
        <div
          onClick={() => newChat()}
          className="new-chat mt-[30px] inline-flex items-center gap-10 bg-[#e6eaf1]   rounded-full p-3 font-semibold text-gray-400 cursor-pointer"
        >
          <img src={assets.plus_icon} width={20} height={21} alt="alt" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            {prePrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  key={index}
                  className=" flex text-start gap-[10px] p-[10px] pr-[40px] rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000"
                >
                  <img
                    className=" rounded-md"
                    src={assets.message_icon}
                    alt="resct"
                    width={20}
                    height={21}
                  />
                  <p> {item.slice(0, 18)}... </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom  flex flex-col gap-3">
        <div className=" flex gap-3 rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000  p-[10px] pr-[40px] ">
          <img src={assets.question_icon} width={25} height={25} alt="q" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className=" flex gap-3 rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000  p-[10px] pr-[40px] ">
          <img src={assets.history_icon} width={25} height={25} alt="q" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className=" flex gap-3 rounded-md  text-[#282828] cursor-pointer hover:bg-[#e2e6eb] duration-1000  p-[10px] pr-[40px] ">
          <img src={assets.setting_icon} width={25} height={25} alt="q" />
          {extended ? <p>settings</p> : null}
        </div>
      </div>
    </main>
  );
};

export default SideBar;
