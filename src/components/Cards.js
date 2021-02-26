import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>ハワイオアフ島の旅</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-9.jpg"
                text="ハワイの「ファブリックマート」には最高の生地や手芸用品が見れます"
                label="買い物"
                path="/services"
              />
              <CardItem
                src="images/img-2.jpg"
                text="開放的で、ハワイ観光で必ずと言っていいほど行く場所です"
                label="アラモアナＳＣ"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-3.jpg"
                text="「スワップミート」の入場口で1$のチケットで入れます。ここでアメリカンフットボールや野球が開催されています。"
                label="スワップミート"
                path="/services"
              />
              <CardItem
                src="images/img-4.jpg"
                text="LongsDrugsをうろうろしたり、雑貨店をのぞいてみたりしました。"
                label="カハラモール"
                path="/products"
              />
              <CardItem
                src="images/img-8.jpg"
                text="ハワイにきたら必ずと言っていいほどくるビーチ。みんな楽しそう。"
                label="ワイキキビーチ"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
