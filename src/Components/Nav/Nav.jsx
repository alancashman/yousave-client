import "./Nav.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";

export default function Nav({ active, setActive }) {
  return (
    <nav className="nav">
      <div className="nav__user-container">
        <img src={avatar} alt="" className="nav__avatar" />
        <div className="nav__user-details">
          <h2 className="nav__username">Alan</h2>
          <p className="nav__user-text">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <ul className="nav__list">
        <li
          className={
            active === "Dashboard" ? "nav__link nav__link--active" : "nav__link"
          }
          onClick={() => setActive("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={
            active === "Transactions"
              ? "nav__link nav__link--active"
              : "nav__link"
          }
          onClick={() => setActive("Transactions")}
        >
          Transactions
        </li>
        <li
          className={
            active === "Income" ? "nav__link nav__link--active" : "nav__link"
          }
          onClick={() => setActive("Income")}
        >
          Income
        </li>
        <li
          className={
            active === "Expenses" ? "nav__link nav__link--active" : "nav__link"
          }
          onClick={() => setActive("Expenses")}
        >
          Expenses
        </li>
      </ul>
    </nav>
  );
}
