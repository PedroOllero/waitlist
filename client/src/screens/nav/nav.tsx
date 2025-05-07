import classes from "./nav.module.css";
const Nav: React.FC = () => {
  return (
    <div>
      <div>
        <img
          src="/src/assets/img/FeatsLogoIMG.png"
          alt="Logo"
        />
        <p>FEATS</p>
      </div>
      <div>
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
    </div>
  );
};

export default Nav;
