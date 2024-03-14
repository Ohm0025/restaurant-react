import heartBtn from "../../../assets/btn/heartBtn.svg";
import star from "../../../assets/star.svg";

type Props = {
  pic: string;
  title: string;
  des: string;
  price: number;
  rate: number;
};

const StandoutItem = (props: Props) => {
  return (
    <div className="w-[400px] h-auto rounded-[40px] shadow-shadow4 bg-white relative flex items-center flex-col justify-center p-[46px]">
      <button className="bg-btnHeart w-[87px] h-[75px] absolute top-0 right-0 flex justify-center items-center">
        <img src={heartBtn} alt="" className="w-[24px] h-[24px] fill-white" />
      </button>
      <div className="flex justify-center items-center">
        <img src={props.pic} alt="pic-standout" />
      </div>
      <div className="mt-[25px] mb-[20px] text-[30px] font-semibold self-start">
        {props.title}
      </div>
      <div className="mb-[28px] text-[22px] font-semibold text-[#555555] self-start">
        {props.des}
      </div>
      <div className="flex justify-between self-start w-full">
        <div className="text-[30px] font-semibold">
          <span className="text-[#FF6868] mr-1">$</span>
          {props.price}
        </div>
        <div className="flex items-center gap-[5px]">
          <img src={star} alt="star-logo" />
          <span className="text-[#454545] text-[24px] font-semibold">
            {props.rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StandoutItem;
