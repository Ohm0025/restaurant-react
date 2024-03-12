type Props = {
  pic: string;
  title: string;
  amount: string;
};

const PopularItem = (props: Props) => {
  return (
    <div className="w-[326px] h-[326px] rounded-[40px] bg-[#ffffff] shadow-shadow3 flex flex-col justify-center items-center gap-[13px]">
      <div className="bg-[#C1F1C6] w-[153px] h-[153px] rounded-full flex justify-center items-center">
        <img src={props.pic} alt="pic-img" />
      </div>
      <div className="font-semibold text-[30px] text-[#1E1E1E]">
        {props.title}
      </div>
      <div className="text-[22px] font-medium text-[#555555]">
        {props.amount}
      </div>
    </div>
  );
};

export default PopularItem;
