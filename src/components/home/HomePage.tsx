import Header from "./header/Header";
import Hero from "./hero/Hero";
import Popular from "./popular/Popular";
import Standout from "./standout/Standout";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] max-w-[1400px] mx-[auto]">
      <Header />
      <div className="px-[40px]">
        <Hero />
        <Popular />
        <Standout />
      </div>
    </div>
  );
};

export default HomePage;
