import React, { useEffect, useState } from "react";
import { Footer, Toggle } from "../../components";
import api from "../../services/api";
import Carousel, { ModalGateway, Modal } from "react-images";

import "./styles.css";
import { AiOutlineZoomIn } from "react-icons/ai";

function AdaptablePortfolio(props) {
  const [portfolio, setPortfolio] = useState([]);
  const [viewer, setViewer] = useState({
    selected: 0,
    visible: false,
  });

  const category = props.match.params.category;

  const handleResponsePortfolioCategory = async () => {
    const { data } = await api.get(`/portfolio`, { params: { category } });
    setPortfolio(data);
  };

  const handleViewer = (selected: any) =>
    setViewer({ selected, visible: !viewer.visible });

  useEffect(() => {
    handleResponsePortfolioCategory();
  }, []);

  return (
    <>
      <Toggle />
      <main className="adaptable">
        <h2>{category}</h2>
        <div className="portfolio">
          {portfolio.map(({ id, source, description }, index) => (
            // className={id % 6 === 0 || id % 4 === 0 ? "featured" : ""}
            <figure
              className="cursor"
              onClick={(e) => {
                e.preventDefault();
                handleViewer(index);
              }}
            >
              <div className="overlay">
                <AiOutlineZoomIn size={60} color="#fff" />
              </div>
              <img src={source} alt={description} />
              <figcaption>{description}</figcaption>
            </figure>
          ))}
        </div>

        <ModalGateway>
          {viewer.visible && (
            <Modal onClose={handleViewer}>
              <Carousel views={portfolio} currentIndex={viewer.selected} />
            </Modal>
          )}
        </ModalGateway>
      </main>
      <Footer />
    </>
  );
}

export default AdaptablePortfolio;
