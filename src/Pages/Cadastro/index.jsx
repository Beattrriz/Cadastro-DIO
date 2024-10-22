import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {MdEmail, MdLock, MdPerson} from 'react-icons/md';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { api } from '../../Services/api';
import { Container, Column, Wrapper, Title, TitleCadastro, SubtitleCadastro, Row, LoginText } from './style'; 

const schema = yup.object({
  fullName: yup.string().required('Campo Obrigatório'),
  email: yup.string().email('Email inválido').required('Campo Obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Cadastro = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
  
  
    try {
        const response = await api.post('/users', formData);
        
        // Verifique se o código de status é 201
        if (response.status === 201) { 
          alert('Cadastro realizado com sucesso!');
          navigate('/login'); 
        } else {
          alert('Erro ao criar conta. Tente novamente.');
        }
      } catch (error) {
        alert('Houve um erro, tente novamente.');
      }
    };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma que você aprende com experts, a dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="fullName" errorMessage={errors.fullName?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson style={{ color: 'purple' }}/>}/>
              <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail style={{ color: 'purple' }}/>}/>
              <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock style={{ color: 'purple' }}/>}/>
              <Button title="Criar Minha Conta" variant="secondary" type="submit" />
            </form>
            <Row>
            <SubtitleCadastro>Ao clicar em "Criar minha conta grátis", declaro que aceito as Politicas de Privacidades e os Termos de Uso da DIO</SubtitleCadastro>
            </Row>
            <span>Já tenho conta.</span>
            <LoginText onClick={() => navigate('/login')}>
            Fazer login.
          </LoginText>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };