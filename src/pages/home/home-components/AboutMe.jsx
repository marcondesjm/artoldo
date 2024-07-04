import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from "react-icons/bs";

import useWindowSize from '../../../hooks/useWindowSize';
import useWindowScroll from '../../../hooks/useWindowScroll';

import jonathan from '../../../images/jonathan.webp';

function AboutMe() {
  const [renderView, setRenderView] = useState(false);

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    const altura = ref.current.getBoundingClientRect().top;
    if (altura < size.height * 0.75) {
      setRenderView(true);
    }  
  }, [position, size]);

  return (
    <div className='about-me' ref={ ref }>
      {
        renderView ? (
          <>
            <div className='img-aboutme'>
              <img alt='foto do Jonathan trabalhando' src={ jonathan }/>
              <div className='quadradinho q-vermelho'/>
              <div className='quadradinho q-azul'/>
              <div className='quadradinho q-amarelo'/>
            </div>
            <div className='txt-aboutme'>
              <h2>Está procurando por toldo?</h2>
              <p>Art Toldos - Atuando no segmento de toldos, estruturas metálicas e serralheria em geral a empresa vem conquistando seus clientes pela ótima qualidade dos produtos com o melhor custo/beneficio...
              <br/>
              <br/>
              Com a sua visão de oferecer soluções completas em intalação, fabricação e manutenção em geral de toldos. Conta com uma equipe altamente capacitada e comprometida. Nossa empresa tem se tornado cada vez mais reconhecida no mercado pela sua dedicação e excelente trabalho.
              </p>
              <Button
                as={ Link } to={'/sobre'}
                className='btn-saber-mais' variant="info">Saber mais <BsArrowRight className='seta'/>
              </Button>
            </div>
          </>
        ) : <p></p>
      }
      
    </div>
  )
}

export default AboutMe;
