import { useContext } from "react";
import { assets } from "../../assets/assets";
import "../../index.css";
import { card } from "../../utils/index";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { motion } from "framer-motion";
const Main = () => {
  const {
    input,
    setInput,
    loading,
    data,
    setRecentPrompt,
    showresult,
    setPrePrompts,
    prePrompts,
    recentPrompt,
    setShowResult,
    resultdata,
    setResultData,
  } = useContext(Context);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 9, scale: 1 }}
      transition={{ duration: 5, delay: 2 }}
      className=" main flex-1 max-md:flex-col  max-h-[100vh] pb-[15vh] relative"
    >
      <div className=" nav  p-[20px] items-center flex justify-between text-[#585858]  font-outfit ">
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 9, scale: 1 }}
          transition={{ duration: 5, delay: 3 }}
          className=" text-[22px] max-md:ml-[-10px]  ml-[0%]"
        >
          AI{" "}
        </motion.p>
        <Link>
          <motion.img
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 9, scale: 1 }}
            transition={{ duration: 8, delay: 2 }}
            className="cursor-pointer rounded-full"
            src={assets.user_icon}
            alt="icon"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className=" max-w-[900px] m-auto">
        {!showresult ? (
          <>
            <Home />
          </>
        ) : (
          <div className="result pt-0 pb-0 pl-[5%] pr-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
            <div className="result-tilte mt-[40px] mb-[40px]  ml-0 mr-0 flex items-center gap-[20px]">
              <img
                className=" rounded-[50%]"
                src={assets.user_icon}
                width={30}
                height={30}
              />
              <p>{recentPrompt} </p>
            </div>
            <div className=" resul-tdata flex items-center gap-[20px]">
              <img
                className=" mb-[8%]"
                src={assets.gemini_icon}
                width={30}
                height={30}
              />
              {loading ? (
                <div className="relative flex justify-center items-center">
                  <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                  <img
                    src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                    className="rounded-full h-28 w-28"
                  ></img>
                </div>
              ) : (
                <p
                  className="   font-outfit  max-md:ml-[-10px]  text-[17px] font-[400]   "
                  dangerouslySetInnerHTML={{ __html: resultdata }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="  bottom absolute bottom-0 w-full max-w-[900px] pl-[20px] pr-[20px] pt-0 pb-0 max-md:w-[40%]   max-md:bottom-[-500px] ">
          <div className=" flex items-center  justify-between gap-[10px] rounded-[50px]  bg-[#f0f4f9] max-md:p-[10%]  max-md:w-[310px] p-4 mb-[-3%]   ">
            {" "}
            <input
              onChange={e => setInput(e.target.value)}
              value={input}
              className="   outline-none  flex items-center justify-between gap-[20px] bg-[#f0f4f9] max-md:flex-none "
              type=" text"
              placeholder="Enter a Propmt Here"
            ></input>
            <div className=" flex items-center gap-[20px]">
              <img src={assets.gallery_icon} alt="" width={20} height={40} />
              <img src={assets.mic_icon} alt="" width={20} height={40} />
              <img
                className=" cursor-pointer"
                onClick={() => data()}
                src={assets.send_icon}
                alt=""
                width={20}
                height={40}
              />
            </div>
          </div>
          <p className="  max-md:mb-[230px]  text-[13px] mt-[26px] mr-[15px] ml-[15px] mb-[15px] max-md:text-[12px] max-md: text-balance  max-md:ml-[-90px]  max-md:mr-[-300px]   text-center font[300]">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
