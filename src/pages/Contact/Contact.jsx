import React from "react";
import "./contact.css";
import Header from "../../components/Header/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="container">
        <h2 className="contact_title">Напишите нам</h2>
        <div className="contact_wrapper">
          <div className="contact_left">
            <input className="contact_input" placeholder="имя" type="text" />
            <input
              className="contact_input"
              placeholder="Электронная почта"
              type="text"
            />
            <input
              className="contact_input"
              placeholder="Номер телефона"
              type="text"
            />
            <input className="contact_input" placeholder="Тема" type="text" />
            <div className="wrapper">
              <input
                className="contact_textarea"
                placeholder="Текст"
                type="textarea"
              />
              <input className="contact_file" type="file" />
              <input
                className="contact_password"
                placeholder="Код"
                type="password"
                name=""
                id=""
              />
              <button className="contact_btn">Отправить</button>
              <button
                onClick={() => window.history.back()}
                className="contact_back"
              >
                Back
              </button>
            </div>
          </div>
          <div className="contact_right">
            <div className="contact_box">
              <h3 className="contact_text">NAMANGANLIKLAR24</h3>
              <div className="box_text">
                <h4 className="box_title">Электронная почта</h4>
                <p className="box_description">info@namanganliklar24.uz</p>
              </div>

              <div className="box_text">
                <h4 className="box_title">Социальные сети</h4>
                <div className="box_icon">
                  <FacebookIcon style={{ color: "#1877F2" }} />
                  <TwitterIcon style={{ color: "#1DA1F2" }} />
                  <DeveloperBoardIcon style={{ color: "#1DA1F2" }} />
                </div>
              </div>

              <div className="box_text">
                <h4 className="box_title">Телеграм канал</h4>
                <button className="box_btn">Подписаться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
