const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between items-center text-2xl px-5 py-3 bg-black text-white">
      <div className="">
        <img
          src="/src/assets/img/FeatsLogoIMG.png"
          alt="Logo"
          className="w-12"
        />
        <p className="text-sm tracking-widest">FEATS</p>
      </div>
      <div className="flex justify-around w-40 text-base tracking-widest font-extralight">
        <a href="#about">
          About
        </a>
        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
