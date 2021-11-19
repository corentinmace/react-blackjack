import { Carte } from "../../types";
import "./index.css";
type CardComponentProps = {
  carte: Carte;
};
const CardComponent = (props: CardComponentProps) => {
  const { carte } = props;
  return (
    <div className="card">
      {" "}
      <img
        className="card-texte"
        data-cke-saved-src={`assets/images/${carte.texte}.png`}
        src={`assets/images/${carte.texte}.png`}
        alt=""
      />{" "}
      <img
        data-cke-saved-src={`assets/images/${carte.enseigne}.png`}
        src={`assets/images/${carte.enseigne}.png`}
        className="card-enseigne"
        alt=""
      />{" "}
      <span className="card-value">{carte.valeur}</span>{" "}
    </div>
  );
};
export default CardComponent;