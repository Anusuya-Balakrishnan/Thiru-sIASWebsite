import { ReactDOM } from "react";
import { PopupStyle } from "./PopupStyle.css";
import Logo from "../PopupPage/images/Logo.svg";

export default function PopupPage() {
  return (
    <section id="PopupPage">
      <div className="PopupPageParent">
        <div className="PopupPageMain">
          <div className="Heading">
            <div className="HeadingImage">
              <img src={Logo} alt="LogoImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
