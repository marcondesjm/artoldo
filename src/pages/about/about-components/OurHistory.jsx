import React from "react";

import van from "../../../images/van-jonathan.jpg";

function OurHistory() {
  return (
    <div className="ourhistory">
      <h2>Nossa História</h2>
      <hr />
      <p>
      Comunicação visual é o foco da Art Toldos, que há mais de 10 anos traz soluções personalizadas e criativas às empresas e negócios na Grande Florianópolis.
      </p>
      <div className="card-aboutUs">
        <div className="img-van" style={{ background: `url(${van})` }} />
        <div className="txt-aboutUs-container">
          <h1>Nós Somos Profissionais</h1>
          <hr />
          <p className="txt-desktop">
            A Art Toldos Atenta as novidades do mercado,utiliza as mais modernas técnicas de produção e matéria-prima, afim de oferecer um resultado final excelente.

Todos os profissionais que integram a equipe da Art Toldos são altamente qualificados e treinados para a execução de todo o processo, desde a criação do projeto, impressão, fabricação e instalação.

Você também conta com atendimento e suporte para a orientação de materiais e dúvidas quanto ao projeto a ser executado.
          </p>

          <p className="txt-tablet">
          A Art Toldos Atenta as novidades do mercado,utiliza as mais modernas técnicas de produção e matéria-prima, afim de oferecer um resultado final excelente.

Todos os profissionais que integram a equipe da Art Toldos são altamente qualificados e treinados para a execução de todo o processo, desde a criação do projeto, impressão, fabricação e instalação.

Você também conta com atendimento e suporte para a orientação de materiais e dúvidas quanto ao projeto a ser executado.
          </p>

          <p className="txt-mobile">
          A Art Toldos Atenta as novidades do mercado,utiliza as mais modernas técnicas de produção e matéria-prima, afim de oferecer um resultado final excelente.

Todos os profissionais que integram a equipe da Art Toldos são altamente qualificados e treinados para a execução de todo o processo, desde a criação do projeto, impressão, fabricação e instalação.

Você também conta com atendimento e suporte para a orientação de materiais e dúvidas quanto ao projeto a ser executado.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurHistory;
