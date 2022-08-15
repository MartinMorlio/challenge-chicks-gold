import "./Filters.scss";
import { GiBroadsword, GiSwapBag } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { RiQuillPenFill } from "react-icons/ri";

export const Filters = () => {
  return (
    <div className="filters__container">
      <div className="filters__container-title">
        <h1 className="filters__title">Condimentum consectetur</h1>
      </div>
      <div className="filters__container-filters">
        <span className="filters__select-game">
          <GiBroadsword
            style={{ position: "absolute", padding: "8px", color: "white" }}
          />
          <select className="filters__game">
            <option value="">Select a game</option>
          </select>
        </span>
        <span className="filters__container-search">
          <BsSearch style={{ position: "absolute", padding: "8px" }} />
          <input
            type="text"
            className="filters__search-input"
            placeholder="Search"
          />
        </span>
        <div className="filters__sort">
          <span className="filters__sort-price">
            <GiSwapBag
              style={{
                position: "absolute",
                marginTop: "20px",
                marginLeft: "-30px",
                color: "green"
              }}
            />
            Price
            <select className="filters__sort-select">
              <option value="">All</option>
            </select>
          </span>
          <span className="filters__sort-type">
            <RiQuillPenFill
              style={{
                position: "absolute",
                marginTop: "20px",
                marginLeft: "-30px",
                color: "green"
              }}
            />
            Item Type
            <select className="filters__sort-select">
              <option value="">All</option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Filters;
