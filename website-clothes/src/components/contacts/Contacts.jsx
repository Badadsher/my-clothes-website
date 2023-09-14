import React from "react";
import "./contacts..css";
const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="left">
        <p>Россия</p>
        <p>Москва</p>
      </div>
      <div className="center">
        <p>Магазины</p>
        <p>8 800 777-4-999</p>
        <p>7:00 – 22:00 МСК</p>
        <p>Клубная программа</p>
      </div>
      <div className="end">
        <h1>Войти</h1>
        <p>или</p>
        <h1>Зарегестрироваться</h1>
      </div>
    </div>
  );
};

export default Contacts;
