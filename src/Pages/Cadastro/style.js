import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`;

export const TitleCadastro = styled.p`
     font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 20px;
    line-height: 44px;
`;


export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`;

export const Wrapper = styled.div`
    max-width: 300px;
    margin: 0 auto; /* Centralizando o Wrapper */
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 14px; /* Ajustando o tamanho do texto */
`;

export const LoginText = styled.span`
  color: green; 
  cursor: pointer; 
  margin-left: 5px; 
  font-weight: bold;

  &:hover {
    color: darkgreen; 
  }
`;