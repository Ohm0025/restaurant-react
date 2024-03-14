import leftBtn from "../../../assets/btn/leftBtn.svg";
import rightBtn from "../../../assets/btn/rightBtn.svg";
import "./Standout.css";
import StandoutItem from "./StandoutItem";
import pic1 from "../../../assets/standout/pic1.svg";
import pic2 from "../../../assets/standout/pic2.svg";
import pic3 from "../../../assets/standout/pic3.svg";

const Standout = () => {
  return (
    <div className="mt-[200px] px-[20px]">
      <div className="text-[#FF6868] text-[20px] font-bold mb-[28px]">
        Special Dishes
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[60px] font-bold max-w-[580px]">
          Standout Dishes From Our Menu
        </div>
        <div className="flex items-center gap-[50px]">
          <button className="bg-[#EFEFEF] rounded-full w-[80px] h-[80px] flex justify-center items-center hover:bg-primary t-btn">
            <img src={leftBtn} alt="lt-btn" />
          </button>
          <button className="bg-[#EFEFEF] rounded-full w-[80px] h-[80px] flex justify-center items-center hover:bg-primary t-btn">
            <img src={rightBtn} alt="rt-btn" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-items-center mt-[63px]">
        <StandoutItem
          pic={pic1}
          title="Fattoush salad"
          des="Description of the item"
          price={24.0}
          rate={4.0}
        />
        <StandoutItem
          pic={pic2}
          title="Vegetable salad"
          des="Description of the item"
          price={26.0}
          rate={4.5}
        />
        <StandoutItem
          pic={pic3}
          title="Egg vegi salad"
          des="Description of the item"
          price={23.0}
          rate={4.3}
        />
      </div>
    </div>
  );
};

export default Standout;
