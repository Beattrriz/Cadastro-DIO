import React from 'react';
import {Button} from '../Button';
import logo from '../../assets/logo-dio.png';

import {BuscarInputContainer,
    Container,
    Column,
    Row,
    Input,
    Menu,
    MenuRight,
    UserPicture,
    Wrapper
} from './style';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
      <Row>
          <img src={logo} alt="Logo da DIO"></img>
          {autenticado ? ( <>
            <BuscarInputContainer>
            <Input placeholder='Buscar ...'></Input>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
            </>
          ): null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/91034950?v=4' />
          ) : (
            <>
             <MenuRight href="#">Home</MenuRight>
             <Button title="Entrar"></Button>
             <Button title="Cadastrar"></Button>
             </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}