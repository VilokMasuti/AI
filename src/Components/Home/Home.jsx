import { assets } from "../../assets/assets";
import { card } from "../../utils";

const Home = () => {
  return (
    <div className=" max-w-[900px] m-auto">
      <div className="greet mt-[50px] mb-[50px] ml-0 mr-0  text-[56px] text-[#c4c7c5] font-[500] p-20px">
        <p className=" ">
          <span
            className=" max-md:text-[22px] max-md:ml-[35%]
            max-md:absolute top-[10%]
             bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
          >
            HELLO,DEV.
          </span>
        </p>
        <p className="max-md:text-[22px]  max-md:ml-[17%] ">
          How Can I Help You Tody ?
        </p>
      </div>
      <div className="  max-md:flex-1 max-md:flex-col  flex    flex-row  gap-[15px] max-md:gap-4  max-md:pt-[-2%] max-md:pl-14 p-20px]">
        {card.map((item, index) => (
          <>
            <div
              key={index}
              className="  hover:bg-[#dfe4ea] hover:border-red-600 duration-1000 max-md:h-[180px]   h-[240px] w-[250px] p-[15px] bg-[#f0f4f9]  rounded-[10px] relative cursor-pointer"
            >
              <p className="  text-[#585858] text-[17px]"> {item.p} </p>
              <img
                className=" p-[5px] absolute bottom-[10px] right-[10px] rounded-[20px]  bg-white"
                src={assets.message_icon}
                alt=""
                width={25}
                height={22}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
