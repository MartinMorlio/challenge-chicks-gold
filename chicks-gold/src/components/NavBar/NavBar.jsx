import "./NavBar.scss";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const NavBar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img
          alt="Logo"
          src="https://chicksgold.com/logo/chicks-logo-large.svg"
        />
        <span className="navbar__limits-items"></span>
        </div>
        <div className="navbar__container-items">
          <div className="navbar__items">
            <select className="navbar__items-select">
              <option value="">CURRENCY</option>
            </select>
            <select className="navbar__items-select">
              <option value="">ITEMS</option>
            </select>
            <select className="navbar__items-select">
              <option value="">ACCOUNTS</option>
            </select>
            <select className="navbar__items-select">
              <option value="">SERVICES</option>
            </select>
            <select className="navbar__items-select">
              <option value="">SWAP</option>
            </select>
            <select className="navbar__items-select">
              <option value="">SELL</option>
            </select>
          </div>
        
      </div>
      <div className="navbar__subcontainer-items">
        <div className="navbar__currency">
          <select className="navbar__select-currency">
            <option value="">USD</option>
          </select>
        </div>
        <button className="navbar__cart">
          <AiOutlineShoppingCart style={{ marginRight: "5px" }} />
          CART (5)
        </button>
        <span className="navbar__span-btn">
          <button className="navbar__btn-signin">SIGN IN</button>
          <FaUserAlt style={{ paddingRight: "5px" }} />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
