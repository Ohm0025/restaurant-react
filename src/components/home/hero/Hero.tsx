import pic from "../../../assets/pic.svg";
import playBtn from "../../../assets/playBtn.svg";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-2 justify-around justify-items-center">
      <div className="flex flex-col items-center justify-center max-w-[622px] gap-[60px]">
        <div className="font-extrabold text-[62px]">
          Dive into Delights Of Delectable{" "}
          <span className="text-primary">Food</span>
        </div>
        <div className="text-[#4A4A4A] font-medium text-[26px]">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </div>
        <div className="flex w-full items-center gap-[35px]">
          <div>
            <button className="text-[26px] font-semibold text-white bg-primary px-[40px] py-[20px] rounded-[40px] shadow-shadow2">
              Order Now
            </button>
          </div>
          <div className="flex items-center gap-[29px]">
            <span className="text-[26px] font-semibold text-[#4d4d4d]">
              Watch Video
            </span>
            <button className="rounded-full flex justify-center items-center bg-white w-[80px] h-[80px] shadow-shadow1">
              <img src={playBtn} alt="play-btn" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={pic} alt="pic" />
      </div>
    </div>
  );
};

export default Hero;
