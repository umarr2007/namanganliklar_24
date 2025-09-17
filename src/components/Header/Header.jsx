import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="headertop_wrapper ">
          <div className="header_leftside">
            <div className="header_logo">
              <div onClick={() => navigate("/")} className="headertop_box">
                <h1>NAMANGANLIKLAR24</h1>
              </div>
            </div>

            <div className="headertop_left">
              <div className="header_text">
                <span>$</span>
                <p>10137.2</p>
              </div>

              <div className="header_text">
                <span>P</span>
                <p>138.26</p>
              </div>

              <div className="header_text">
                <span>E</span>
                <p>10988.72</p>
              </div>
            </div>
          </div>

          <div className="headertop_right">
            <div className="search_box">
              <SearchIcon />
            </div>

            <div className="language_box">
              <div className="language">
                <select className="language_select">
                  <option>RU</option>
                  <option>UZ</option>
                  <option>EN</option>
                </select>
              </div>
            </div>

            <div className="follow">
              <div className="follow_wrapper">
                <button
                  onClick={() => setOpened(true)}
                  className="follow_button"
                >
                  {" "}
                  <TelegramIcon /> Подписаться
                </button>
              </div>
            </div>
          </div>

          <div className="menu_btn" onClick={() => setOpen(!open)}>
            ☰
          </div>

          {open && (
            <div className={open ? "menu_text active" : "menu_text"}>
              <div className="menu_left">
                <div className="header_text">
                  <span>$</span>
                  <p>10137.2</p>
                </div>

                <div className="header_text">
                  <span>P</span>
                  <p>138.26</p>
                </div>

                <div className="header_text">
                  <span>E</span>
                  <p>10988.72</p>
                </div>
              </div>
              <div className="language_box">
                <div className="language">
                  <img src="/ru.svg" alt="" />
                  <p className="russian">РУ</p>
                </div>
              </div>

              <div className="search_box">
                <SearchIcon />
              </div>

              <div className="follow">
                <div className="follow_wrapper">
                  <button
                    onClick={() => setOpened(true)}
                    className="follow_button"
                  >
                    {" "}
                    <TelegramIcon /> Подписаться
                  </button>
                </div>
              </div>

              <button className="close_btn" onClick={() => setOpen(false)}>
                ✖
              </button>
            </div>
          )}
        </div>

        <div className="header_box">
          <div className="header_box_wrapper">
            <Link className="header_links">Узбекистана</Link>
            <Link className="header_links">Мир</Link>
            <Link className="header_links">Экономика</Link>
            <Link className="header_links">Политика</Link>
            <Link className="header_links">Общество</Link>
            <Link className="header_links">Технологии</Link>
            <Link className="header_links">Спорт</Link>
            <Link className="header_links">Культура</Link>
            <Link className="header_links">Происшествия</Link>
            <Link to={"/contact"} className="header_links">
              Контакт
            </Link>
          </div>
        </div>

        <div className="banner">
          <img src="/banner.png" alt="" />
        </div>

        <Modal open={opened} handleClose={() => setOpened(false)} />
      </div>
    </header>
  );
}

export default Header;
