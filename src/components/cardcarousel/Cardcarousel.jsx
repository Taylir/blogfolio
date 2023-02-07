import React, {useState} from "react";
import './Cardcarousel.css'

function Cardcarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const groups = document.getElementsByClassName("card-group");
  
    function cardRight() {
      const nextIndex =
        activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
      const currentGroup = document.querySelector(
          `[data-index="${activeIndex}"]`
        ),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
      currentGroup.dataset.status = "after";
  
      nextGroup.dataset.status = "becoming-active-from-before";
  
      setTimeout(() => {
        nextGroup.dataset.status = "active";
        setActiveIndex(nextIndex);
      });
    }
  
    function cardLeft() {
      const nextIndex =
        activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
      const currentGroup = document.querySelector(
          `[data-index="${activeIndex}"]`
        ),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
      currentGroup.dataset.status = "before";
  
      nextGroup.dataset.status = "becoming-active-from-after";
  
      setTimeout(() => {
        nextGroup.dataset.status = "active";
        setActiveIndex(nextIndex);
      });
    }
  return (
    <div className="card-swiper">
      <div className="card-groups">
        <div className="card-group" data-index="0" data-status="active">
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
        <div className="card-group" data-index="1" data-status="unknown">
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
        <div className="card-group" data-index="2" data-status="unknown">
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
      </div>
      <div className="card-swiper__buttons">
        <button id="prev-card" onClick={cardLeft}>
          ←
        </button>
        <button id="next-card" onClick={cardRight}>
          →
        </button>
      </div>
    </div>
  );
}

export default Cardcarousel;
