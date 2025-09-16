import React from "react";
import Header from "../../components/Header/Header";
import "./article.css";
import Footer from "../../components/Footer/Footer";

function Article() {
  return (
    <section>
      <Header />

      <div className="container">
        <div className="article_wrapper">
          <div className="left_article">
            <img src="/article.svg" alt="" />
            <div className="article_texts">
              <h2 className="article_title">
                19 мая состоялось видеоселекторное совещание, посвященное
                дополнительным мерам <br /> поддержки предпринимательства.
              </h2>
              <p className="article_description">
                По данным пресс-службы главы государства, из-за пандемии в
                Узбекистане число бедных и <br /> безработных увеличится, а
                доходы семей уменьшатся. На совещании обсуждены <br />{" "}
                дополнительные меры и приоритетные задачи в этом направлении.{" "}
                <br /> <br /> Прежде всего, серьезное внимание уделено
                обеспечению гарантий прав предпринимателей <br /> и
                неприкосновенности их имущества. <br />
                <br />
              </p>
              <h3 className="article_title">
                «Предупреждаю всех хокимов. Если имущество хоть одного
                предпринимателя будет изъято <br /> незаконно, хоким одной лишь
                отставкой не отделается, но и ответит перед законом», - <br />
                подчеркнул Шавкат Мирзиёев.
              </h3>
              <p className="article_description">
                Компетентным ведомствам даны указания усилить ответственность за
                нарушение <br /> неприкосновенности собственности, обеспечить
                полноценное исполнение решений суда о <br /> компенсации
                имущества предпринимателей. <br /> <br /> Согласно поручению
                президента деловая активность в каждом районе и городе будет{" "}
                <br /> анализироваться на ежемесячной основе. <br /> <br />{" "}
                Бизнес-омбудсман будет вносить правительству информацию о
                хокимах районов и городов, <br /> которые допускают нарушения
                прав и неприкосновенности собственности предпринимателей. <br />
                <br /> Кабинетом Министров будет рассматриваться вопрос о
                соответствии должности хокимов <br /> городов и районов, которые
                не решают проблемы предпринимателей и не работают с ними <br />в
                достаточной мере.
              </p>
            </div>
          </div>

          <div className="right_article">
            <div className="right_content">
              <div className="popular_box">
                <div className="popular_texts">
                  <h5 className="popular_title">Cамые популярные новости</h5>
                  <h6 className="popular_description">
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                  </h6>
                  <p className="popular_date">11:31 / 15.05.2020</p>
                  <hr />
                </div>

                <div className="popular_texts">
                  <h5 className="popular_title">Cамые популярные новости</h5>
                  <h6 className="popular_description">
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                  </h6>
                  <p className="popular_date">11:31 / 15.05.2020</p>
                  <hr />
                </div>

                <div className="popular_texts">
                  <h5 className="popular_title">Cамые популярные новости</h5>
                  <h6 className="popular_description">
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                  </h6>
                  <p className="popular_date">11:31 / 15.05.2020</p>
                  <hr />
                </div>

                <div className="popular_texts">
                  <h5 className="popular_title">Cамые популярные новости</h5>
                  <h6 className="popular_description">
                    По факту прорыва Сардобинского <br /> водохранилища <br />{" "}
                    возбуждено уголовное дело
                  </h6>
                  <p className="popular_date">11:31 / 15.05.2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box_wrapper">
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
        </div>
        <div className="back">
          <button onClick={() => window.history.back()} className="contact_back">
            Back
          </button>
        </div>{" "}
      </div>
      <Footer />
    </section>
  );
}

export default Article;
