import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

function CardOpinion({ reloadOpinion, setReloadOpinion }) {
  const [opinions, setOpinions] = useState([]);

  const handleOpinions = async () => {
    let { data } = await api.get("/opinion");
    setOpinions(data);
  };

  const handleDeletion = async (key) => {
    let { status } = await api.delete(`/opinion/${key}`);
    if (status === 200)
      return setOpinions(opinions.filter(({ id }) => id !== key));
  };

  useEffect(() => {
    handleOpinions();
    if (reloadOpinion === true) {
      handleOpinions();
      setReloadOpinion(false);
    }
    console.log(reloadOpinion);
  }, [reloadOpinion === true]);

  return (
    <div className="card-opinion">
      <h1>Depoimentos</h1>
      <div className="cards">
        {opinions.map(({ id, name, quote, channel }) => (
          <div className="opinion" key={id}>
            <h4>
              {name}

              <Link to="#" onClick={() => handleDeletion(id)}>
                <AiOutlineDelete />
              </Link>
            </h4>
            <div className="primary">
              <h5>{channel}</h5>
              <p>{quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardOpinion;
