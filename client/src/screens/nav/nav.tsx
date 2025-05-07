const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between text-2xl px-5 py-3 bg-black text-white">
      <div className="">
        <img
          src="/src/assets/img/FeatsLogoIMG.png"
          alt="Logo"
          className="w-11"
        />
        <p className="text-sm">FEATS</p>
      </div>
      <div className="flex justify-around w-100 font-extralight">
        <a href="#home">
          Home
        </a>
        <a href="#about">
          About
        </a>
        <a href="#services">
          Services
        </a>
        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
