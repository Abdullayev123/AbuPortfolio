const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <>
      <div className="max-w-xl  px-5 py-2 absolute  top-10 left-1/2 -translate-x-1/2 z-10 text-sm text-[#eeeeee] bg-[#1A1A1A] border border-gray-50/10 rounded-md">
        <nav className="flex justify-between gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[#eeeeee]/75 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
