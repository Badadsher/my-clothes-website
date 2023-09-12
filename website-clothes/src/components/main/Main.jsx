import React from "react";
import "./main.css";
import First from "../assets/rows/first-row/1.jpg";
import Second from "../assets/rows/first-row/2.jpg";
import Third from "../assets/rows/first-row/3.jpg";
import Fourth from "../assets/rows/first-row/4.jpg";
import Fifth from "../assets/rows/first-row/5.jpg";
import Sixth from "../assets/rows/first-row/6.jpg";
import Seventh from "../assets/rows/first-row/7.jpg";
import Eighth from "../assets/rows/first-row/8.jpg";
import Nineth from "../assets/rows/first-row/9.jpg";
import Tenth from "../assets/rows/first-row/10.jpg";
import Eleventh from "../assets/rows/first-row/11.jpg";
import Twelveth from "../assets/rows/first-row/12.jpg";
import Thirteenth from "../assets/rows/first-row/13.jpg";
import Fourteenth from "../assets/rows/first-row/14.jpg";
import Fifteenth from "../assets/rows/first-row/15.jpg";
import Sixteenth from "../assets/rows/first-row/16.jpg";

const Main = () => {
  return (
    <div className="Main">
      <div className="shop-list">
        <div className="first-row">
          <div>
            <img src={First} alt="first"></img>
            <h3>Бомбер с меховым воротником</h3>
            <p>5999р</p>
          </div>
          <div>
            <img src={Second} alt="second"></img>
            <h3>Пальто с воротником-стойкой</h3>
            <p>9999р</p>
          </div>
          <div>
            <img src={Third} alt="third"></img>
            <h3>Футболка-поло</h3>
            <p>999р</p>
          </div>
          <div>
            <img src={Fourth} alt="fourth"></img>
            <h3>Куртка-бомбер </h3>
            <p>1999р</p>
          </div>
        </div>
        <div className="second-row">
          <div>
            <img src={Fifth} alt="fifth"></img>
            <h3>Майка с принтом</h3>
            <p>999р</p>
          </div>
          <div>
            <img src={Sixth} alt="sixth"></img>
            <h3>Рубашка Shaped Fit</h3>
            <p>1999р</p>
          </div>
          <div>
            <img src={Seventh} alt="seventh"></img>
            <h3>Рубашка Shaped Fit</h3>
            <p>1999р</p>
          </div>
          <div>
            <img src={Eighth} alt="eighth"></img>
            <h3>Шорты из хлопка</h3>
            <p>1999р</p>
          </div>
        </div>
        <div className="third-row">
          <div>
            <img src={Nineth} alt="nineth"></img>
            <h3>Футболка с принтом</h3>
            <p>999р</p>
          </div>
          <div>
            <img src={Tenth} alt="tenth"></img>
            <h3>Футболка с принтом</h3>
            <p>9999р</p>
          </div>
          <div>
            <img src={Eleventh} alt="eleventh"></img>
            <h3>Брюки из микротвила</h3>
            <p>1599р</p>
          </div>
          <div>
            <img src={Twelveth} alt="twelveth"></img>
            <h3>Шорты из хлопка</h3>
            <p>1299р</p>
          </div>
        </div>
        <div className="fourth-row">
          <div>
            <img src={Thirteenth} alt="thirteenth"></img>
            <h3>Свободные джинсы</h3>
            <p>2499р</p>
          </div>

          <div>
            <img src={Fourteenth} alt="fourteenth"></img>
            <h3>Плавательные шорты </h3>
            <p>599р</p>
          </div>
          <div>
            <img src={Fifteenth} alt="fifteenth"></img>
            <h3>Футболка с принтом</h3>
            <p>599р</p>
          </div>
          <div>
            <img src={Sixteenth} alt="sixteenth"></img>
            <h3>Футболка с принтом</h3>
            <p>799р</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
