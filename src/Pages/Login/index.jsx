import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import {MdEmail, MdLock} from 'react-icons/md';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import {api} from '../../Services/api';
import {Container, Column, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './style'

const schema = yup.object({
  email: yup.string().email('email inválido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();


const Login = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid,  } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
      if (data.length > 0) {
        navigate('/feed'); 
      } else {
        alert('Email ou senha inválidos.');
      }
    } catch (error) {
      alert('Houve um erro, tente novamente.');
    }
  };

  const handleNavigateToSignUp = () => {
    navigate('/cadastro'); 
  };

  return (<>
    <Header />
    <Container>
      <Column>
        <Title> 
          A plataforma que você aprende com experts, a dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
      <Wrapper>
        <TitleLogin>Faça seu cadastro</TitleLogin>
        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail style={{ color: 'purple' }}/>}></Input>
          <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock style={{ color: 'purple' }}/>}></Input>
          <Button title="Entrar" variant="secondary"  type="submit"></Button>
        </form>
        <Row>
          <EsqueciText>Esqueci minha senha</EsqueciText>
          <CriarText onClick={handleNavigateToSignUp}>Criar Conta</CriarText>
        </Row>
      </Wrapper>
      </Column>
    </Container>
    </>
  )
}

export {Login}