import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // I will not always add the bump class, but I'll check if btnIsHighlighted
  // is true. And if that's the case, classes.bump is added, otherwise an empty string is added
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  // I pass our effect function to that and then our array of dependencies
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    // set a timer which removes that class again so that when it's added again in the future, it again plays
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // In useEffect, this will be called automatically as a cleanup function by React. And here, I'll call clearTimeout
    // and clear that timer, so that when this effect reruns, we clear the timer.
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
