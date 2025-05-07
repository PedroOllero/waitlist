import classes from "./nav.module.css";
const Nav: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img
          src="/src/assets/img/FeatsLogoIMG.png"
          alt="Logo"
          className={classes.logo}
        />
        <p>FEATS</p>
      </div>
      <div className={classes.navLinks}>
        <a className={classes.logoText} href="#home">
          Home
        </a>
        <a className={classes.logoText} href="#about">
          About
        </a>
        <a className={classes.logoText} href="#services">
          Services
        </a>
        <a className={classes.logoText} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
