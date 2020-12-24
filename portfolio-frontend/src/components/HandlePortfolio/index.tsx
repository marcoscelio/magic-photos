import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Carousel, { ModalGateway, Modal } from "react-images";

import { AiOutlineDelete } from "react-icons/ai";

import "./styles.css";

function HandlePortfolio({ reloadHandlePortfolio, setReloadHandlePortfolio }) {
  const [items, setItems]: any = useState();
  const [viewer, setViewer] = useState({
    selected: 0,
    visible: false,
  });

  const handleDeletion = async (id) => {
    const copy = items;
    try {
      // const index = items.findIndex((item) => item.id === id);
      await api.delete(`/portfolio/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      setItems(copy);
    }
  };

  const handleViewer = (selected: any) =>
    setViewer({ selected, visible: !viewer.visible });

  const handlePortfolioList = async () => {
    await api.get("/portfolio-list").then((res) => {
      setItems(res.data);
    });
  };

  useEffect(() => {
    handlePortfolioList();
    if (reloadHandlePortfolio === true) {
      handlePortfolioList();
      setReloadHandlePortfolio(false);
    }
    console.log(reloadHandlePortfolio);
  }, [reloadHandlePortfolio === true]);

  return (
    <main id="portfolio" className="main-portfolio">
      <div className="portfolio">
        {items &&
          items.map((item, index) => (
            <figure key={item.id}>
              <img
                src={item.source}
                alt={item.description}
                className="cursor"
                onClick={(e) => {
                  e.preventDefault();
                  handleViewer(index);
                }}
              ></img>
              <div>
                {/* <div
                  className="overlay"
                  
                >
                  <AiOutlineZoomIn size={60} color="#fff" />
                </div> */}
              </div>
              <figcaption>Descrição: {item.description}</figcaption>
              <figcaption className="figcaption-category">
                Categoria: {item.category}
                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeletion(item.id);
                  }}
                >
                  <AiOutlineDelete size={25} color="#fff" />
                </button>
              </figcaption>
            </figure>
          ))}

        <ModalGateway>
          {viewer.visible && (
            <Modal onClose={handleViewer}>
              <Carousel views={items} currentIndex={viewer.selected} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    </main>
  );
}

export default HandlePortfolio;
