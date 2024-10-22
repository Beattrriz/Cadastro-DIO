import React from 'react';
import hero from '../../assets/hero.webp';
import {FiThumbsUp} from 'react-icons/fi'
import {CardContainer, Content, HasInfo, ImageBackground,
     PostInfo, UserInfo, UserPicture} from './style';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={hero}></ImageBackground>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/91034950?v=4'></UserPicture>
                <div>
                    <h4>Beatriz Souza</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de html e css</h4>
                <p>Projeto feito no curso de html e css...<strong>Saiba Mais</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}