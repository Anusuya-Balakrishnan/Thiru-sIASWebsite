import React from "react";
import logoimage from "./images/Logo.svg";
import { ImLocation, ImLinkedin2 } from "react-icons/im";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";
import FooterStyle from "./FooterStyle.css";
import Button from "../Button/ButtonHtml";

export default function FooterHtml() {
  return (
    <section id="FooterPage">
      <div className="FooterPageParent">
        <div className="FooterParent">
          <div className="FooterContent">
            <img src={logoimage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              amet, lobortis habitant dolor consequat. Adipiscing a in sociis
              enim, posuere ac.
            </p>
            <div className="FooterSubscribe">
              <div className="SubscribeBox">Enter your Email</div>
              <Button name="Subscribe" />
            </div>
          </div>
          <div className="FooterList">
            <p>Contact</p>
            <p>Courses</p>
            <p>FAQ</p>
            <p>About us</p>
          </div>
          <div className="FooterAddress">
            <div className="AddressDiv">
              <span className="EachIcon">
                <MdLocationPin />
              </span>
              <p>
                No. 2, First floor, Karuvadikuppam Main Road, near Ginger hotel,
                near French corner bakery, Muthialpet, Puducherry, 605003.
              </p>
            </div>
            <div className="PhoneNumber">
              <span className="EachIcon">
                <MdLocalPhone />
              </span>
              <p> +91 863 767 0992 </p>
            </div>
            <div className="email">
              <span className="EachIcon">
                <MdEmail />
              </span>
              <p> thiru.best111@gmail.com </p>
            </div>
          </div>
        </div>
        <div className="IconList">
          <div className="EachIcon">
            <GrFacebookOption />
          </div>

          <div className="EachIcon">
            <AiOutlineTwitter />
          </div>

          <div className="EachIcon">
            <AiFillInstagram />
          </div>

          <div className="EachIcon">
            <ImLinkedin2 />
          </div>
        </div>
      </div>
    </section>
  );
}
