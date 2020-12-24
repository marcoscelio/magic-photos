import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { AiOutlineDelete } from "react-icons/ai";

import "./styles.css";
import { Link } from "react-router-dom";

function ContactIndex() {
  const [contacts, setContacts] = useState([]);

  const handleContacts = async () => {
    let { data } = await api.get("/contact");
    setContacts(data);
  };

  const handleDeletion = async (key) => {
    let { status } = await api.delete(`/contact/${key}`);
    if (status === 200)
      return setContacts(contacts.filter(({ id }) => id !== key));
  };

  useEffect(() => {
    handleContacts();
  }, []);

  return (
    <div className="contact">
      <h1>Contactos</h1>
      <div className="contact-item">
        {contacts.map(({ id, name, message, phone, email, subject }) => (
          <div className={id % 3 === 0 ? "item" : "item secondary"} key={id}>
            <h4>
              <div>
                <strong>Cliente: </strong>
                {name}
              </div>
              <Link to="#" onClick={() => handleDeletion(id)}>
                <AiOutlineDelete />
              </Link>
            </h4>
            <div className="inner-item">
              <h5>
                <strong>Telefone: </strong>
                {phone}
              </h5>
              <h5>
                <strong>Email: </strong>
                {email}
              </h5>

              <div className="subject-message">
                <h5>
                  <strong>Assunto</strong>
                  {subject}
                </h5>
                <p>
                  <strong>Mensagem: </strong>
                  {message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactIndex;
