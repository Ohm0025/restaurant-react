import PopularItem from "../popular/PopularItem";
import pic1 from "../../../assets/popular/pic1.svg";
import pic2 from "../../../assets/popular/pic2.svg";
import pic3 from "../../../assets/popular/pic3.svg";
import pic4 from "../../../assets/popular/pic4.svg";

const Popular = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="text-[#FF6868] text-[20px] font-bold mb-[28px] text-center">
          Customer Favorites
        </div>
        <div className="text-[60px] font-bold text-center">
          Popular Catagories
        </div>
        <div className="grid grid-cols-2 gap-[20px] lg:gap-[40px] lg:grid-cols-4 mt-[78px] justify-items-center">
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
