import PopularItem from "../popular/PopularItem";
import pic1 from "../../assets/popular/pic1.svg";
import pic2 from "../../assets/popular/pic2.svg";
import pic3 from "../../assets/popular/pic3.svg";
import pic4 from "../../assets/popular/pic4.svg";

const Popular = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="text-[#FF6868] text-[20px] font-bold mb-[28px]">
          Customer Favorites
        </div>
        <div className="text-[60px] font-bold">Popular Catagories</div>
        <div className="flex gap-[38px] mt-[78px]">
          <PopularItem pic={pic1} title="Main Dish" amount="(86 dishes)" />
          <PopularItem pic={pic2} title="Break Fast" amount="(12 break fast)" />
          <PopularItem pic={pic3} title="Dessert" amount="(48 dessert)" />
          <PopularItem pic={pic4} title="Browse All" amount="(255 Items)" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
