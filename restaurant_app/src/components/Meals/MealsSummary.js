import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        Blending simplicity and inspiration, KJ's celebrates cuisine from
        America's rich culinary landscape, seamlessly blending American classics
        with modern techniques and seasonal ingredients.
      </p>
    </section>
  );
};

export default MealsSummary;
