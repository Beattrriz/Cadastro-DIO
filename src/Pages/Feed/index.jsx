import React from 'react';

import { Header } from '../../Components/Header';
import {Card} from '../../Components/Card'

import {Container, Column, TitleHighlight} from './style'
import {UserInfo} from '../../Components/UserInfo'

const Feed = () => {
  return (<>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </Column>
      <Column flex={1}>
      <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo percentual={35} nome="Beatriz Souza" image="https://avatars.githubusercontent.com/u/91034950?v=4"></UserInfo>
        <UserInfo percentual={85} nome="Beatriz Souza" image="https://avatars.githubusercontent.com/u/91034950?v=4"></UserInfo>
        <UserInfo percentual={50} nome="Beatriz Souza" image="https://avatars.githubusercontent.com/u/91034950?v=4"></UserInfo>
      </Column>
    </Container>
    </>
  )
}

export {Feed}