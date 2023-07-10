import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import LoadingSpin from 'react-loader-spinner';
import { useState } from "react";
import axios from "axios";

export default function SignUpPage() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function refreshOnError() {
    window.location.reload(false);
  }

  function registerUser() {

    setLoading(true);
    const promise = axios.post('localhost:5000/cadastro', {
      email: email,
      nome: nome,
      senha: senha,
      confirm: confirm
    });

    promise.then(response => {
      setLoading(false);
      const { data } = response;
      console.log(data);
      navigate('/');
    })

    promise.catch(err => {
      setLoading(false);
      console.log(err);
      alert('Sentimos muito, mas correu um erro. Por favor, tente novamente!');
      refreshOnError();
    })

  }

  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input type={'text'} placeholder={'Nome'} value={nome} onChange={(e) => setName(e.target.value)} />
        <input type={'email'} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type={'password'} placeholder={'Senha'} value={senha} onChange={(e) => setPassword(e.target.value)} />
        <input type={'password'} placeholder={'Confirme a senha'} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        <button>
          {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
          ) : (
            'CADASTRAR'
          )
          }
        </button>
      </form>

      <Link to='/'>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
