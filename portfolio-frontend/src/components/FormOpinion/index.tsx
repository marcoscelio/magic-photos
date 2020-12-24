import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { validate } from "./validate";

import * as Yup from "yup";

import "./styles.css";
import api from "../../services/api";
import { BiMessageAltAdd } from "react-icons/bi";
import CardOpinion from "../CardOpinion";

function FormOpinion() {
  const [reloadOpinion, setReloadOpinion] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (values) => {
    const { status } = await api.post("/opinion", values);

    if (status === 201) {
      setSuccessMessage(!successMessage);
      setReloadOpinion(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } else {
      setErrorMessage(!errorMessage);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="form-opinion">
        <h1>Inserir Depoimento</h1>
        <Formik
          initialValues={{ name: "", quote: "", channel: "" }}
          validationSchema={Yup.object(validate)}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="inner-opinion-row">
              <div>
                <label htmlFor="firstName">Nome:</label>
                <Field id="name" name="name" placeholder="John" />
                <div className="message--error">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div>
                <label htmlFor="channel">Canal:</label>
                <Field
                  id="channel"
                  name="channel"
                  placeholder="ex: Facebook, Twitter"
                />
                <div className="message--error">
                  <ErrorMessage name="channel" />
                </div>
              </div>
            </div>

            <div className="opinion-container">
              <div className="inner-opinion-column">
                <label htmlFor="quote">Opinião: </label>
                <Field
                  id="quote"
                  as="textarea"
                  name="quote"
                  placeholder="Insira aqui um depoimento..."
                />
                <div className="message--error">
                  <ErrorMessage name="quote" />
                </div>
                <div className="message--success center">
                  {successMessage && "Dados cadastrados com sucesso"}
                </div>
                <div className="message--error center">
                  {errorMessage &&
                    "*Erro ao cadastrar os dados, por favor contate o administrador"}
                </div>
              </div>
            </div>

            <div className="buttons-container">
              <button type="submit">
                <BiMessageAltAdd />
                Inserir depoimento
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <CardOpinion
        reloadOpinion={reloadOpinion}
        setReloadOpinion={setReloadOpinion}
      />
    </>
  );
}

export default FormOpinion;
