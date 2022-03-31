import { Fragment } from "react";
import foodImage from "../../assets/Food.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Kyle's Restaruant</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Table full of pretzels and beer." />
      </div>
    </Fragment>
  );
};

export default Header;
