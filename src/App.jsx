import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import News from "./components/News/News";
import Notice from "./components/Notice/Notice";
import Uncos from "./components/Uncos/Uncos";
import Article from "./pages/Article/Article";
import Headline from "./components/Headline/Headline";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Article/Contact/Contact";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Information />
              <News />
              <Notice/>
              <Uncos/>
              <Headline/>
              <Footer/>
            </div>
          }
        />

        <Route path="/article" element={<Article/>} />
        <Route path="/contact" element={<Contact/>} />



      </Routes>
    </div>
  );
}
export default App;