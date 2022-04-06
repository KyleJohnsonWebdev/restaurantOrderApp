import { Fragment } from "react";
import foodImage from "../../assets/Food.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>KJ's </h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Table full of food." />
      </div>
    </Fragment>
  );
};

export default Header;
