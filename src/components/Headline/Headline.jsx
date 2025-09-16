import React from "react";
import "./Headline.css";

function Headline() {
  return (
    <section>
      <div className="container">
        <div className="headline_wrapper">
          <div className="headline_box">
            <div className="box_wrapper">
              <div className="left">
                <img src="/phone.svg" alt="" />
              </div>

              <div className="right">
                <h2 className="headline_title">
                  Всегда будьте в курсе последних новостей!
                </h2>
                <p className="headline_description">
                  Установите мобильное приложение NAMANGANLIKLAR24 <br /> и все
                  новости в вашем кармане!
                </p>
              </div>

              <div className="buttons_wrapper">
                <img src="/playmarket.svg" alt="" />
                <img src="/appstore.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headline;
