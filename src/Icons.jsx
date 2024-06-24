import "./Icons.css";
import react_icon from "./assets/react.svg";
import javascript_icon from "./assets/javascript.svg";
import html_icon from "./assets/html.svg";
import css_icon from "./assets/css.svg";
import python_icon from "./assets/python.svg";
import sql_icon from "./assets/sql.svg";

function Icons() {
  return (
    <section>
      <div className="iconContainer">
        <img className="iconImg" src={react_icon} alt="" />
        <img className="iconImg" src={javascript_icon} alt="" />
        <img className="iconImg" src={python_icon} alt="" />
        <img className="iconImg" src={html_icon} alt="" />
        <img className="iconImg" src={css_icon} alt="" />
        <img className="iconImg" src={sql_icon} alt="" />
      </div>
    </section>
  );
}

export default Icons;
