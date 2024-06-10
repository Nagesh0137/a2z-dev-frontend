import React, { useEffect } from 'react';
import './slider.css';

function Slider() {
  useEffect(() => {
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');

    let slider = document.querySelector('.slider');
    let sliderList = slider.querySelector('.slider .list');
    let thumbnail = document.querySelector('.slider .thumbnail');
    let thumbnailItems = thumbnail.querySelectorAll('.item');

    thumbnail.appendChild(thumbnailItems[0]);

    nextBtn.onclick = function() {
      moveSlider('next');
    };

    prevBtn.onclick = function() {
      moveSlider('prev');
    };

    function moveSlider(direction) {
      let sliderItems = sliderList.querySelectorAll('.item');
      let thumbnailItems = document.querySelectorAll('.thumbnail .item');

      if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
      }

      slider.addEventListener(
        'animationend',
        function() {
          if (direction === 'next') {
            slider.classList.remove('next');
          } else {
            slider.classList.remove('prev');
          }
        },
        { once: true }
      );
    }
  }, []);

  return (
    <div className="slider" style={{ backgroundColor: 'black' }}>
      <div className="list">
        <div className="item">
          <img src="1.jpg" alt="" />

          <div className="content">
            <div className="title">A2Z IT HUB</div>
            <div className="type">WEB DEVELOPER</div>
            <div className="description">
              Experience digital excellence with our custom-built websites and intuitive software solutions.
            </div>
            <div>
              <button className="btn bg-color rounded rounded-pill ms-5 mt-5">SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="pic5.jpg" alt="" />

          <div className="content">
            <div className="title">A2Z IT HUB</div>
            <div className="type">WEB DEVELOPER</div>
            <div className="description">
              Experience digital excellence with our custom-built websites and intuitive software solutions.
            </div>
            <div>
              <button className="btn bg-color rounded rounded-pill ms-5 mt-5">SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="3.jpg" alt="" />

          <div className="content">
            <div className="title">A2Z IT HUB</div>
            <div className="type">WEB DEVELOPER</div>
            <div className="description">
              Experience digital excellence with our custom-built websites and intuitive software solutions.
            </div>
            <div>
              <button className="btn bg-color rounded rounded-pill ms-5 mt-5">SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="4.jpg" alt="" />

          <div className="content">
            <div className="title">A2Z IT HUB</div>
            <div className="type">WEB DEVELOPER</div>
            <div className="description">
              Experience digital excellence with our custom-built websites and intuitive software solutions.
            </div>
            <div>
              <button className="btn bg-color rounded rounded-pill ms-5 mt-5">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail">
        <div className="item">
          <img src="1.jpg" alt="" style={{borderImage:'fill 0 linear-gradient(#0010,#000)'}} />
        </div>
        <div className="item">
          <img src="pic5.jpg" alt="" />
        </div>
        <div className="item">
          <img src="3.jpg" alt="" />
        </div>
        <div className="item">
          <img src="4.jpg" alt="" />
        </div>
      </div>

      <div className="nextPrevArrows">
        <button className="prev">
          <i className="fa-solid fa-forward fa-flip-horizontal"></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}

export default Slider;
