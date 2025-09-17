import React from "react";
import "./uncos.css";
import { useNavigate } from "react-router-dom";
function Uncos() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <h2 className="uncos_text">Последние новости</h2>
        <div className="uncos_wrapper">
          <div className="left_content">
            <div onClick={() => navigate("/article")} className="uncos_box">
              <div className="left_box">
                <img src="/uncos.svg" alt="" />
              </div>
              <div className="right_box">
                <h4 className="uncos_title">
                  По факту прорыва Сардобинского водохранилища <br /> возбуждено
                  уголовное дело
                </h4>
                <p className="uncos_description">
                  После прорыва дамбы Сардобинского водохранилища возбуждено{" "}
                  <br />
                  уголовное дело, сообщили в пресс-службе Генпрокуратуры <br />
                  Узбекистана.
                </p>
                <p className="uncos_date">11:31 / 15.05.2020</p>
              </div>
            </div>

            <div onClick={() => navigate("/article")} className="uncos_box">
              <div className="left_box">
                <img
                  onClick={() => navigate("/article")}
                  src="/kengash.svg"
                  alt=""
                />
              </div>
              <div className="right_box">
                <h4 className="uncos_title">
                  По факту прорыва Сардобинского водохранилища <br /> возбуждено
                  уголовное дело
                </h4>
                <p className="uncos_description">
                  После прорыва дамбы Сардобинского водохранилища возбуждено{" "}
                  <br />
                  уголовное дело, сообщили в пресс-службе Генпрокуратуры <br />
                  Узбекистана.
                </p>
                <p className="uncos_date">11:31 / 15.05.2020</p>
              </div>
            </div>

            <div onClick={() => navigate("/article")} className="uncos_box">
              <div className="left_box">
                <img src="/aftobus.svg" alt="" />
              </div>
              <div className="right_box">
                <h4 className="uncos_title">
                  По факту прорыва Сардобинского водохранилища <br /> возбуждено
                  уголовное дело
                </h4>
                <p className="uncos_description">
                  После прорыва дамбы Сардобинского водохранилища возбуждено{" "}
                  <br />
                  уголовное дело, сообщили в пресс-службе Генпрокуратуры <br />
                  Узбекистана.
                </p>
                <p className="uncos_date">11:31 / 15.05.2020</p>
              </div>
            </div>

            <div onClick={() => navigate("/article")} className="uncos_box">
              <div className="left_box">
                <img src="/uncos.svg" alt="" />
              </div>
              <div className="right_box">
                <h4 className="uncos_title">
                  По факту прорыва Сардобинского водохранилища <br /> возбуждено
                  уголовное дело
                </h4>
                <p className="uncos_description">
                  После прорыва дамбы Сардобинского водохранилища возбуждено{" "}
                  <br />
                  уголовное дело, сообщили в пресс-службе Генпрокуратуры <br />
                  Узбекистана.
                </p>
                <p className="uncos_date">11:31 / 15.05.2020</p>
              </div>
            </div>

            <div onClick={() => navigate("/article")} className="uncos_box">
              <div className="left_box">
                <img src="/kengash.svg" alt="" />
              </div>
              <div className="right_box ">
                <h4 className="uncos_title">
                  По факту прорыва Сардобинского водохранилища <br /> возбуждено
                  уголовное дело
                </h4>
                <p className="uncos_description">
                  После прорыва дамбы Сардобинского водохранилища возбуждено{" "}
                  <br />
                  уголовное дело, сообщили в пресс-службе Генпрокуратуры <br />
                  Узбекистана.
                </p>
                <p className="uncos_date">11:31 / 15.05.2020</p>
              </div>
            </div>

            <div onClick={() => navigate("/article")} className="uncos_box">
              <div className="left_box">
                <img src="/aftobus.svg" alt="" />
              </div>
              <div className="right_box">
                <h4 className="uncos_title">
                  По факту прорыва Сардобинского водохранилища <br /> возбуждено
                  уголовное дело
                </h4>
                <p className="uncos_description">
                  После прорыва дамбы Сардобинского водохранилища возбуждено{" "}
                  <br />
                  уголовное дело, сообщили в пресс-службе Генпрокуратуры <br />
                  Узбекистана.
                </p>
                <p className="uncos_date">11:31 / 15.05.2020</p>
              </div>
            </div>
            <div className="uncos_box_button">
              <button className="uncos_button">Больше новостей</button>
            </div>
          </div>

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
            <img className="ucell" src="/ucell.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Uncos;
