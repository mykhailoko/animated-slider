import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import Shawarma from '../../Assets/shawarma.png'
import Burger from '../../Assets/burger.png'
import Doner from '../../Assets/doner.png'
import Meat from '../../Assets/meat.png'
import Onion from '../../Assets/onion.png'
import Cucumber from '../../Assets/cucumber.png'
import Tomato from '../../Assets/tomato.png'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default function SliderHeader() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.text-back');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Slider {...settings}>
      <div className="back"> 
        <div className="back-all">
          <h1 className="text-back">SHAWARMA</h1>
        </div>
        <a href="." target="_blank" rel="noreferrer" className="image" >
          <img 
            src={Shawarma} 
            alt="shawarma" 
          />
        </a>
        <div className="all-ingridients">
          <div className="left-ingridients">
           <img className="ingridients" id="cucumber" src={Cucumber} alt="cucumber" />
            <img className="ingridients" id="meat" src={Meat} alt="meat" />
          </div>
          <div className="right-ingridients">
            <img className="ingridients" id="onion" src={Onion} alt="onion" />
            <img className="ingridients" id="tomato" src={Tomato} alt="tomato" />
          </div>
        </div>
      </div>

      <div className="back">
        <div className="back-all">
          <h1 className="text-back">BURGER</h1>
        </div>
        <a href="." target="_blank" rel="noreferrer" className="image" >
          <img 
            src={Burger} 
            alt="burger" 
          />
        </a>
        <div className="all-ingridients">
          <div className="left-ingridients">
           <img className="ingridients" id="cucumber" src={Cucumber} alt="cucumber" />
            <img className="ingridients" id="meat" src={Meat} alt="meat" />
          </div>
          <div className="right-ingridients">
            <img className="ingridients" id="onion" src={Onion} alt="onion" />
            <img className="ingridients" id="tomato" src={Tomato} alt="tomato" />
          </div>
        </div>
      </div>

      <div className="back">
        <div className="back-all">
          <h1 className="text-back">DONNER</h1>
        </div>
        <a href="." target="_blank" rel="noreferrer" className="image" >
          <img 
            src={Doner} 
            alt="doner" 
          />
        </a>
        <div className="all-ingridients">
          <div className="left-ingridients">
           <img className="ingridients" id="cucumber" src={Cucumber} alt="cucumber" />
            <img className="ingridients" id="meat" src={Meat} alt="meat" />
          </div>
          <div className="right-ingridients">
            <img className="ingridients" id="onion" src={Onion} alt="onion" />
            <img className="ingridients" id="tomato" src={Tomato} alt="tomato" />
          </div>
        </div>
      </div>
    </Slider>
  );
}
