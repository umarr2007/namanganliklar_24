import React from "react";
import "./Information.css";

function Information() {
  return (
    <div>
      <div className="container">
        <div className="info_box">
          <div className="info_wrapper">
            <div className="box_text">
              <div className="left">
                <img src="/virus.svg" alt="" />
              </div>
              <div className="right">
                <p className="virus_text">
                  Коронавирус <br /> COVID-19 <br />  Узбекистане
                </p>
              </div>
            </div>

            <div className="box_text">
              <div className="left">
                <img src="/mask.svg" alt="" />
              </div>
              <div className="right">
                <p className="information_text">Инфицированы</p>
                <p className="information_number">2753</p>
              </div>
            </div>

            <div className="box_text">
              <div className="left">
                <img src="/smile.svg" alt="" />
              </div>
              <div className="right">
                <p className="smile_text">Выздоровели</p>
                <p className="smile_number">2245</p>
              </div>
            </div>

            <div className="box_text">
              <div className="left">
                <img src="/nopossible.svg" alt="" />
              </div>
              <div className="right">
                <p className="nopossible_text" >Умерли</p>
                <p className="nopossible_number">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
