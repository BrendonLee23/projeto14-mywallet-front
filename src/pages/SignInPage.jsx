import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
/* import LoadingSpin from 'react-loader-spinner'; */

export default function SignInPage() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function loginUser(e) {
    
    e.preventDefault();

    setLoading(true);
    const promise = axios.post('http://localhost:5000/', {
      email: email,
      senha: senha
    });

    promise.then(response => {
      setLoading(false);
      const { data } = response;
      console.log(data);
      //localStorage.setItem('token, data.token')
      /* setToken(data.token);
      setUser(data); */
      navigate('/home');
    })

    promise.catch(err => {
      setLoading(false);
      console.log(err);
      alert('Sentimos muito, mas correu um erro. Por favor, tente novamente!)');
    })
  }

  return (
    <SingInContainer>
      <form>
        <MyWalletLogo />
        <input type={'text'} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type={'password'} placeholder={'Senha'} value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button onClick={loginUser}>
          {loading ? (<div>Caregando...</div>) : (
            'Entrar'
          )
          }
        </button>
      </form>
      <Link to='/cadastro' >
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
