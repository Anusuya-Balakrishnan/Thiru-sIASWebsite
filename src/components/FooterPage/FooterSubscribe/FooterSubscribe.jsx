import React from "react";
import FooterStyle from "../FooterStyle.css";
import SmallButton from "../../Button/SmallButton/SmallButton";
export default function FooterSubscribe(props) {
  return (
    <div className="FooterSubscribe">
      <input type="text" className="SubscribeBox" placeholder={props.value} />
      {/* <div className="SubscribeBox">{props.value}</div> */}
      <div className="FooterButton">
        <SmallButton value="Subscribe" />
      </div>
    </div>
  );
}
