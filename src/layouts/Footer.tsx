const Footer = () => {
  return (
    <footer className="min-h-auto bg-[#0F0E0E] pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 grid grid-cols-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="border-l border-gray-50/2"></div>
        ))}
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
