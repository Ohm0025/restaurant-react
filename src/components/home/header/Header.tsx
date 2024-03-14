import logoWeb from "../../../assets/logoWeb.svg";
import magnifyGlass from "../../../assets/magnifyingGlass.svg";
import shoppingBag from "../../../assets/shoppingBag.svg";
import useHeader from "./Header.hook";

const Header = () => {
  const { navigatePage } = useHeader();
  return (
    <div className="flex h-[143px] justify-around items-center mx-auto">
      <div className="flex justify-center items-center">
        <img src={logoWeb} alt="logo-web" className="min-w-[109px] h-[41px]" />
      </div>

      <div className="font-pop text-[20px] font-medium flex gap-[60px] text-secondary mx-[30px]">
        <button className="hover:text-primary">Home</button>
        <button className="hover:text-primary">Menu</button>
        <button className="hover:text-primary">Services</button>
        <button className="hover:text-primary">Offers</button>
      </div>

      <div className="flex items-center gap-[46px] text-secondary">
        <button className="w-[40px] h-[40px] p-[5px]">
          <img src={magnifyGlass} alt="magnify-glass" />
        </button>
        <button className="w-[40px] h-[40px] p-[5px]">
          <img src={shoppingBag} alt="shopping-bag" />
        </button>
        <button
          onClick={() => navigatePage("/auth/register")}
          className="w-[179px] h-[60px] bg-primary rounded-[40px] text-[20px] text-white font-medium">
          Register
        </button>
        <button
          onClick={() => navigatePage("/auth/login")}
          className="text-[20px] font-medium hover:underline">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
