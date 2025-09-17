import React from "react";
import "./news.css";
function News() {
  return (
    <section>
      <div className="container_news">
        <div className="news_wrapper">
          <div className="news_box">
            <img className="prezident" src="/prezident.svg" alt="" />
            <h3 className="news_text">
              Мирзиёев рассказал, зачем было построено <br /> Сардобинское
              водохранилище
            </h3>
            <div className="date">
              <h5>05:28 /</h5>
              <p>16.05.2020</p>
            </div>
          </div>

          <div className="news_box">
            <img className="karantin" src="/karantin.svg" alt="" />
            <h3 className="news_text">
              Карантин в Узбекистане продлен до 1 июня
            </h3>
            <div className="date">
              <h5>05:28 /</h5>
              <p>16.05.2020</p>
            </div>
          </div>

          <div className="news_box">
            <img className="sardoba" src="/sardoba.svg" alt="" />
            <h3 className="news_text">
              Обмелевшая Сардоба: стихия или <br /> человеческий фактор?{" "}
            </h3>
            <div className="date">
              <h5>05:28 /</h5>
              <p>16.05.2020</p>
            </div>
          </div>

          <div className="news_box">
            <img className="prokuror" src="/prokuror.svg" alt="" />
            <h3 className="news_text">
              Следствие проверяет четыре версии <br /> прорыва Сардобинской
              плотины{" "}
            </h3>
            <div className="date">
              <h5>05:28 /</h5>
              <p>16.05.2020</p>
            </div>
          </div>

          <div className="news_box">
            <img className="tez_yordam" src="/tez_yordam.svg" alt="" />
            <h3 className="news_text">Выявлено еще 7 случаев коронавируса </h3>
            <div className="date">
              <h5>05:28 /</h5>
              <p>16.05.2020</p>
            </div>
          </div>

          <div className="news_box">
            <img className="stop_karantin" src="/stop_karantin.svg" alt="" />
            <h3 className="news_text">Итоги второго месяца карантина </h3>
            <div className="date">
              <h5>05:28 /</h5>
              <p>16.05.2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default News;
