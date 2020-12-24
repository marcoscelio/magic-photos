import React, { useEffect, useState } from "react";
import defaultSlides from "./defaultSlides";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function Slider() {
  const [curr, setCurr] = useState(0);

  const goToNext = () => {
    const { length } = defaultSlides;
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  useEffect(() => {
    setTimeout(goToNext, 8000);

    return function () {
      // clearTimeout(goToNext);
      clearTimeout();
    };
  });

  if (!Array.isArray(defaultSlides) || defaultSlides.length <= 0) {
    return null;
  }

  return (
    <aside id="slider" className="slider">
      <div className="base-sticky">
        <a
          className="sticky-button"
          href={"https://wa.me/+5515996617491"}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          <span>Entrar em contato</span>
        </a>
        {defaultSlides.map((s, i) => (
          <div
            className={i === curr ? "slide active" : "slide"}
            key={s.title}
            area-hidden={i !== curr}
          >
            {i === curr && (
              <img className="image" src={s.image} alt={s.description} />
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Slider;
