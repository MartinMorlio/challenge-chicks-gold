import "./Home.scss";
import Cards from "../Cards/Cards";
import { GrSort } from "react-icons/gr";
import NavBar from "../NavBar/NavBar";
import Filters from "../Filters/Filters";

export const Home = () => {
  return (
    <div className="home__container">
      <NavBar />
      <Filters />
      <div className="home__cards-container">
        <div className="home__cards-title">
          <span className="home__cards-showing">Showing 1-12 of 12</span>
          <div className="home__container-select">
          <GrSort
            style={{
              backgroundColor: "rgba(76,96,133,.2)",
              height: "39px",
              padding: "5px",
            }}
          />
            <select className="home__cards-select">
            <option className="home__cards-option" value="featured">
              Featured
            </option>
            <option className="home__cards-option" value="low-to-high">
              Price: (Low to High)
            </option>
            <option className="home__cards-option" value="high-to-low">
              Price: (High to Low)
            </option>
          </select>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};
export default Home;
