import React, { useState, useReducer } from "react";
// import { TypeAnimation } from 'react-type-animation';

import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";

// import sound from './confetti/Onoise.mp3';

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};

export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {

    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } 
    else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (
    <div className="App">
      <Confetti open={jump === "jump"} />
      <div className="img-container">
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" />

        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>

        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
        <br/>

        <div className="Text"> Happy birthday to</div>
        <div className="Text"> Phan Ngọc Anh Thy </div>
      </div>

      <div className="letter1">
        <p>Chúc Thy sinh nhật vui vẻ, mỗi ngày đều tràn đầy năng lượng, luôn vui vẻ, may mắn và hạnh phúc. Mãi mãi, như một ánh mặt trời.</p>
        <p>Trang web này lúc trước tui không biết đưa lên hoạt động, giờ nó có thể hoạt động rồi, tui sẽ cố gắng duy trì nó, xin lỗi Thy vì mất nhiều thời gian đến vậy. Mà, trang web này cũng chẳng có gì đặc biệt, chắc Thy thất vọng lắm nhỉ?. Mấy món quà tui tặng Thy đều chẳng có gì đặc biệt hay hữu dụng cả... xin lỗi Thy nha.</p>  
      </div>

      <div className="letter2">
        <p>Thời gian sẽ trôi nhanh thôi, có thể mai này chẳng còn gặp lại được nữa, ai cũng bộn bề cuộc sống. Nếu thật vậy, chẳng biết Thy có còn nhớ đến tui không? Tui chỉ mong Thy có được những gì mình muốn và làm được những gì mình thích, như vậy thì người bạn này đã mãn nguyện rồi.</p>
        <p>Vẫn còn nhiều lời hứa chưa thực hiện được, mong là tui sẽ có cơ hội khác. Cám ơn Thy vì đã luôn giúp đỡ tui.</p>
      </div>

    </div>
  );
}
