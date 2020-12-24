import React, { useState } from "react";
import api from "../../services/api";
import { S3 } from "../../utils/aws";

import { HiOutlineViewGridAdd } from "react-icons/hi";

import "./styles.css";
import HandlePortfolio from "../HandlePortfolio";

function EditPortfolio() {
  const [reloadHandlePortfolio, setReloadHandlePortfolio] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | any>([]);
  const [category, setCategory] = useState("externo");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const handleCreateImage = async (location) => {
    const { status } = await api.post("/registerimage", {
      url: location,
      description,
      category,
    });

    if (status === 201) {
      setSuccessMessage(!successMessage);
      setReloadHandlePortfolio(true);
      setTimeout(() => setSuccessMessage(false), 3000);
    } else {
      setErrMessage(!errMessage);
      setTimeout(() => setErrMessage(false), 3000);
    }
  };

  const fileUploadHandler = async (event: any) => {
    event.preventDefault();
    console.log("start of upload");
    if (selectedFile === "") {
      console.error(`not an image, the image file is a ${typeof selectedFile}`);
      setErrMessage(!errMessage);
      setTimeout(() => setErrMessage(false), 3000);
      return;
    }
    console.log(selectedFile[0]);
    const params = {
      Bucket: "magic-photos",
      Key: `${category}/${selectedFile[0].name}`, // nome do arquivo a salvar no s3
      Body: selectedFile[0],
      ContentType: selectedFile[0].type,
    };

    await S3.upload(params, function (err, data) {
      if (err) {
        setErrMessage(!errMessage);
        setTimeout(() => setErrMessage(false), 3000);
        return;
      }
      console.log(`File uploaded successfully. ${data}`);
      console.log(data);
      handleCreateImage(data.Location);
    });
  };

  return (
    <>
      <form action="" className="form-portfolio">
        <h1>Editar Portfólio</h1>
        <div className="container-upload">
          <div className="flex-row-portfolio">
            <label htmlFor="cars">Categoria:</label>
            <select
              name="cars"
              id="cars"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              defaultValue="1"
            >
              <option value="externo">Externo</option>
              <option value="pascoa">Páscoa</option>
              <option value="lifestyle">lifestyle</option>
              <option value="junina">Junina</option>
              <option value="batizado">Batizado</option>
              <option value="gestante-estudio">Gestante Estúdio</option>
              <option value="ano-novo">Ano Novo</option>
              <option value="natal">Natal</option>
              <option value="cenarios-menino">Cenários Menino</option>
              <option value="cenarios-menina">Cenários Menina</option>
              <option value="baby-milk">Baby Milk</option>
              <option value="aniversario">Aniversário</option>
              <option value="familia-estudio">Família Estúdio</option>
              <option value="newborn">Newborn</option>
              <option value="pet">Pet</option>
              <option value="smash-the-cake">Smash The cake</option>
            </select>
          </div>
          <div className="flex-row-portfolio">
            <label htmlFor="description">Descrição: </label>
            <input
              type="text"
              id="description"
              placeholder="descrição da imagem"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="container-upload">
          <div>
            <label className="form-label" htmlFor="customFile">
              Selecione uma imagem
            </label>
            <input
              type="file"
              className="form-control"
              id="customFile"
              onChange={(event: any) => {
                const target = event.target as HTMLInputElement;
                const file: File = (target.files as FileList)[0];
                setSelectedFile([file]);
              }}
            />
            {/* <input
            type="file"
            className="input-file"
            
          /> */}
          </div>
        </div>
        <div className="buttons-container container-upload">
          <div>
            <button onClick={fileUploadHandler}>
              <HiOutlineViewGridAdd />
              Enviar Imagem
            </button>
            {successMessage && (
              <div className="message--success">
                Dados inseridos com sucesso
              </div>
            )}
            {errMessage && (
              <div className="message--error">Erro ao inserir os dados</div>
            )}
          </div>
        </div>
      </form>
      <HandlePortfolio
        reloadHandlePortfolio={reloadHandlePortfolio}
        setReloadHandlePortfolio={setReloadHandlePortfolio}
      />
    </>
  );
}

export default EditPortfolio;
