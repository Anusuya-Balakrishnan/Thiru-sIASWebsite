import React from "react";
import FooterStyle from "../FooterStyle.css";
import SmallButton from "../../Button/SmallButton/SmallButton";
export default function FooterSubscribe() {
  return (
    <div className="FooterSubscribe">
      <div className="SubscribeBox">Enter your email</div>
      <div className="FooterButton">
        <SmallButton value="Subscribe" />
      </div>
    </div>
  );
}
