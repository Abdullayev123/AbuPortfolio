import Header from "../../components/Header";
import Skills from "../../components/Skills";
import MyWorks from "../../components/MyWorks";

const Home = () => {
  return (
    <div className="h-auto w-full bg-[#0F0E0E] relative">
      <div>
        <div className="absolute top-0 left-0 w-full h-full z-0 grid grid-cols-20">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="border-l border-gray-50/2"></div>
          ))}
        </div>
      </div>
      <Header />
      <Skills />
      <MyWorks />
    </div>
  );
};

export default Home;
