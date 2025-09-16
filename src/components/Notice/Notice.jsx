import React from "react";
import "./notice.css";

function Notice() {
  return (
    <section>
      <div className="container">
        <div className="notice_box">
          <div className="notice_left">
            <img src="/notice.svg" alt="" />
            <h3 className="notice_text">
              Хотите узнать новости первыми? подключите уведомления!
            </h3>
          </div>
          <div className="notice_right">
            <button className="notice_btn">Включит уведомления!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notice;
