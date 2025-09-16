import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer_wrapper">
        <div className="footer_box">
          <div className="container">
            <div className="footer_top">
              <div className="footer_left">
                <button className="footer_btn">NAMANGANLIKLAR24</button>
              </div>
              <div className="footer_right">
                <h3 className="footer_title">
                  Подписывайтесь на наш канал в Telegram и будьте всегда в курсе
                  самых последних новостей:
                </h3>
              </div>
              <button className="second_btn">Подписатся</button>
            </div>
            <div className="footer_content">
              <div className="left">
                <h3 className="left_title">О сайте </h3>
                <p className="left_description">
                  Воспроизводство, копирование, тиражирование, <br />{" "}
                  распростране ние и иное использование <br /> информации с
                  сайта «NAMANGANLIKLAR24.UZ» <br />
                  возможно только с предварительного письменного <br />{" "}
                  разрешения редакции.
                </p>
              </div>
              <div className="medium">
                <div className="medium_left">
                  <Link className="links">Информация о сайте</Link>
                  <Link className="links">Напишите нам</Link>
                  <Link className="links">Реклама</Link>
                  <Link className="links">Прислать новость</Link>
                </div>

                <div className="meduim_right">
                  <Link className="links">Использование материалов</Link>
                  <Link className="links">Темы дня</Link>
                  <Link className="links">Наша команда</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
