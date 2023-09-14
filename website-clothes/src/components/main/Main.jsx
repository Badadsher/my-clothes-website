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
        <div className="section-bar">
          <h2>НОВИНКИ</h2>
          <h1>АКЦИИ</h1>
          <p>-20% при заказе от 4 499 р.</p>
          <h1>ЭТО МОДНО</h1>
          <p>Куртки для осени</p>
          <p>Офис: новый сезон</p>
          <p>Брюки: актуальные модели</p>
          <p>Гранж – тренд сезона</p>
          <p>Базовый гардероб</p>
          <p>Street style</p>
          <p>Varsity: образы для учёбы</p>
          <p>Хиты продаж</p>
          <h1>SALE</h1>
          <h1>ОДЕЖДА</h1>
          <p>Брюки</p>
          <p>Футболки и поло</p>
          <p>Рубашки</p>
          <p>Толстовки</p>
          <p>Джемперы и кардиганы</p>
          <p>Жакеты и пиджаки</p>
          <p>Спортивная одежда</p>
          <p>Жилеты</p>
          <p>Шорты</p>
          <p>Плавательные шорты</p>
          <h1>ВЕРХНЯЯ ОДЕЖДА</h1>
          <p>Куртки</p>
          <p>Ветровки</p>
          <p>Пальто и плащи</p>
          <h1>DENIM</h1>
          <p>Джинсы</p>
          <p>Джинсовые куртки</p>
          <p>Шорты</p>
          <h1>АКСЕССУАРЫ</h1>
          <p>Сумки и рюкзаки</p>
          <p>Головные уборы</p>
          <p>Ремни</p>
          <p>Носки</p>
          <p>Перчатки и варежки</p>
          <h1>НИЖНЕЕ БЕЛЬЕ</h1>
          <p>Трусы</p>
          <p>Носки</p>
          <p>Майки</p>
          <h1>ОБУВЬ</h1>
          <p>Летняя обувь</p>
        </div>
        <div className="clothes-list">
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
    </div>
  );
};

export default Main;
