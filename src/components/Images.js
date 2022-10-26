import cat from "./animal1.jpeg";
import animal1 from "./animal2.jpeg";
import animal2 from "./download.jpeg";
import animal3 from "./images (1).jpeg";
import animal4 from "./images (2).jpeg";
import { Link } from "react-router-dom";
import animal5 from "./images.jpeg";
import animal6 from "./lion.jpeg";
import peacock from "./peacock.jpeg";
import "../App.css";

export default function Images() {
  return (
    <div className="animal-div">
      <h1>Animals</h1>
      <Link className="homepage-link" to="/user">
        Home Page
      </Link>
      <img className="animal" src={cat} alt="cat" />

      <img className="animal" src={animal1} alt="animal" />
      <img className="animal" src={animal2} alt="animal" />
      <img className="animal" src={animal3} alt="animal" />
      <img className="animal" src={animal4} alt="animal" />
      <img className="animal" src={animal5} alt="animal" />
      <img className="animal" src={animal6} alt="animal" />
      <img className="animal" src={peacock} alt="animal" />
    </div>
  );
}
