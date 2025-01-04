import coloree from "../../../asset/images/etoile-coloree.png";
import grise from "../../../asset/images/etoile-grise.png";

const Rating = ({ classement }) => {
  const nombreEtoile = [];

  for (let star = 1; star <= 5; star++) {
    if (star <= classement) {
      nombreEtoile.push(
        <img
          key={star}
          className="star"
          src={coloree}
          alt="notation positive"
        ></img>
      );
    } else {
      nombreEtoile.push(
        <img
          key={star}
          className="star"
          src={grise}
          alt="notation negative"
        ></img>
      );
    }
  }

  return <div className="notation">{nombreEtoile}</div>;
};

export default Rating;
