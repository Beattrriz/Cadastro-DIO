import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/banner.png'
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';

import {Container, TextContent, Title, TitleHighLight} from './style'

const Home = () => {

  const navigate = useNavigate();

  const handleClickSigIn = () => {
    navigate('/login')
  }

  return (<>
    <Header />
    <Container>
      <div>
        <Title> 
          <TitleHighLight>
            Implemente
            <br />
          </TitleHighLight>
          o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickSigIn}></Button>
      </div>
      <div>
        <img src={bannerImg} alt='Imagem principal'></img>
      </div>
    </Container>
    </>
  )
}

export {Home}