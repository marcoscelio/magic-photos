import React from "react";

import "./styles.css";

function About() {
  return (
    <div className="scalable-container" id="about">
      <h2>Quem somos</h2>
      <div className="hearts">
        <img src="https://picsum.photos/id/10/200/300" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div>
        <h3>Fotógrafos Jéssica Pereira e Rafel Bergo</h3>
        <h3>-Desde 2013</h3>
      </div>
      <h3 className="description">
        "Somos um casal apaixonados pelo que fazemos, não nos imaginamos em
        nenhum outro lugar, a não ser atrás das câmeras. Buscamos o momento em
        que a emoção e o encantamento surgem no rosto e nos gestos das pessoas."
      </h3>
      <h3 className="simple">
        Observamos atentos e quando isso acontece, 'Clic', guardamos estas
        recordações como quem coleciona borboletas. A diferença é que elas
        permanecem vivas e capazes de levar quem as observa em suas asas!
      </h3>
      <h3 className=". simple bold-text">
        A fotografia para nós não é só lembrança é uma herança, uma forma única
        de reviver nossos melhores momentos!
      </h3>
      <h3 className="simple">
        Muito mais do que registrar momentos... nossa missão é contar histórias!
      </h3>
      <h3 className="simple bold-text bigger-text">
        Caso tenha gostado do nosso trabalho venha bater um papo com a gente,
        será um prazer poder contar a sua história também, com fotos lindas e
        emocionantes!
      </h3>
      <h3 className="simple">
        Trabalhamos com Eventos como, Fotografia de Festa Infantil, Batizado,
        Chá de Bebê e Chá Revelação de Sexo; Comemorativo e Pet.
      </h3>
      <h3 className="simple">
        Trabalhamos com Ensaios como, Gestante, Revelação da Gravidez, Infantil,
        Bebê, Família, Smash the Cake, Baby Milk, Newborn, Lifestyle,
        Acompanhamento do Bebê, Comemorativo e Pet.
      </h3>
    </div>
  );
}

export default About;
