import React, { useState } from "react";
import Input from "../Input";

import { ErrorMessage, useFormik } from "formik";

import * as Yup from "yup";
import { validate } from "./validate";

import { IconContext } from "react-icons";
import { GrLocation } from "react-icons/gr";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

import api from "../../services/api";

import "./styles.css";

function FormContact() {
  const [sentContact, setSentContact] = useState(false);
  const [errorxxx, setErrorxxx] = useState(false);

  const handleRegister = async (values) => {
    // event.preventDefault();

    try {
      const { status } = await api.post("/contact", values);
      if (status === 201) setSentContact(true);
      else setErrorxxx(true);
    } catch (err) {
      setErrorxxx(true);
    }

    setTimeout(() => {
      setSentContact(false);
      setErrorxxx(false);
    }, 3000);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object(validate),
    onSubmit: (values) => {
      handleRegister(values);
    },
  });
  return (
    <div id="contact" className="contact-component">
      <h2>Contato</h2>
      <div className="flex">
        <div className="image-box">
          {/* <img src="https://picsum.photos/id/50/1200/600" alt="" /> */}
          <IconContext.Provider value={{ className: "react-icons" }}>
            <p>
              <GrLocation />
              Av. 5 de Novembro, n°923, Vila Nastri - Itapetininga
              <br /> R. Antonio de Almeida, n°426, Vila Nova - Votorantim R.
              <br /> Jorge Ferreira Ávila, nº116, Dic V - Campinas <br />
            </p>
            <p>
              <AiOutlineWhatsApp />
              (15) 99661-7491 - <AiOutlineWhatsApp />
              (19) 99484-8611
            </p>
            <p>
              <a
                href="mailto:contato@amorecarinhofotografia.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
                contato@amorecarinhofotografia.com.br
              </a>
              <a
                href="http://www.facebook.com/amorecarinhofotografia"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFacebook />
                facebook.com/morecarinhofotografia
              </a>
              <a
                href="https://www.instagram.com/amorecarinhofotografia/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
                instagram.com/amorecarinhofotografia/
              </a>
            </p>
            <p>
              <strong>
                ATENDIMENTO NA REGIÃO DE CAMPINAS, SOROCABA, ITAPETININGA E
                OUTRAS LOCALIDADES
              </strong>
            </p>
          </IconContext.Provider>
        </div>
        <div className="form-box">
          <form onSubmit={formik.handleSubmit} className="contact-form">
            <div className="double-input">
              <div className="row">
                <Input
                  label="Nome"
                  placeholder="Seu nome"
                  {...formik.getFieldProps("name")}
                />
                <div className="message--error">
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <Input
                  label="Telefone"
                  placeholder="Seu telefone"
                  {...formik.getFieldProps("phone")}
                />
                <div className="message--error">
                  {formik.touched.phone && formik.errors.phone ? (
                    <div>{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="double-input">
              <div className="row">
                <Input
                  label="Email"
                  placeholder="Seu email"
                  {...formik.getFieldProps("email")}
                />
                <div className="message--error">
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <Input
                  label="Assunto"
                  placeholder="O assunto"
                  {...formik.getFieldProps("subject")}
                />
                <div className="message--error">
                  {formik.touched.subject && formik.errors.subject ? (
                    <div>{formik.errors.subject}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="message-box">
              <label htmlFor="message">Mensagem</label>
              <textarea
                placeholder="De que forma podemos ajudá-lo?"
                {...formik.getFieldProps("message")}
              />
              <div className="message--error center">
                {formik.touched.message && formik.errors.message ? (
                  <div>{formik.errors.message}</div>
                ) : null}
              </div>
            </div>
            {sentContact && (
              <div className="message message--success">
                Dados enviados com sucesso
              </div>
            )}
            {errorxxx && (
              <div className="message message--error">
                Erro ao enviar os dados
              </div>
            )}
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormContact;
