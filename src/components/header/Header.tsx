import logoWeb from "../../assets/logoWeb.svg";
import magnifyGlass from "../../assets/magnifyingGlass.svg";
import shoppingBag from "../../assets/shoppingBag.svg";

const Header = () => {
  return (
    <div className="w-full min-w-[300px]">
      <div className="flex w-[80%] h-[143px] justify-between items-center mx-auto">
        <div className="flex justify-center items-center">
          <img
            src={logoWeb}
            alt="logo-web"
            className="min-w-[109px] h-[41px]"
          />
        </div>

        <div className="font-pop text-[20px] font-medium flex gap-[60px] text-secondary">
          <button className="hover:text-primary">Home</button>
          <button className="hover:text-primary">Menu</button>
          <button className="hover:text-primary">Services</button>
          <button className="hover:text-primary">Offers</button>
        </div>

        <div className="flex items-center gap-[46px] text-secondary">
          <button className="w-[32px] h-[32px] p-[5px]">
            <img src={magnifyGlass} alt="magnify-glass" />
          </button>
          <button className="w-[32px] h-[32px] p-[5px]">
            <img src={shoppingBag} alt="shopping-bag" />
          </button>
          <button className="w-[179px] h-[60px] bg-primary rounded-[40px] text-[20px] text-white font-medium">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
