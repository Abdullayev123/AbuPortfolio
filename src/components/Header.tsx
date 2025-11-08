import { Earth, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Xezer_CV.pdf";
    link.download = "Abdullayev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full min-h-dvh relative flex items-center justify-center flex-col overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-full z-0 grid grid-cols-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="border-l border-gray-50/2"></div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center max-w-[600px] text-wrap leading-none">
        <p className="text-[#eeeeee]/80 text-md font-light z-1 leading-loose">
          Based in Azerbaijan
        </p>
        <h1 className="z-1 text-white text-[38px] font font-bold text-center ">
          Quality
          <span className="text-[40px] text-[#7fbdcb] px-2">
            Design & Web Development
          </span>
          Synergy.
        </h1>
        <p className="text-[#eeeeee]/80 text-xs font-light z-1 leading-loose mt-2 text-center">
          Hi, I'm Xezer a Front-End Developer passionate about crafting modern
          digital experiences.
        </p>
      </div>
      <div className="z-1 mt-2 flex gap-6">
        <Link
          to="../projects"
          className="bg-[#1A1A1A] text-xs border border-gray-50/10 py-1 px-3 text-[#eeeeee]/75 flex items-center gap-1 rounded-md hover:text-white transition-colors duration-300"
        >
          See My Works
          <MoveRight size={12} />
        </Link>
        <button
          onClick={handleDownload}
          className="text-xs text-[#7fbdcb] flex items-center gap-1 rounded-md hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Look My CV
          <Earth size={12} />
        </button>
      </div>
      <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm z-1">
        Scroll Down
      </span>
    </section>
  );
};

export default Header;
