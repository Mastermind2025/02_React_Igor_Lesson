

import { Layout } from './components/Layout/Layout';
import { Product } from './components/Product/Product';
import { Header } from './components/Layout/Header/Header';
import { Counter } from './components/Counter/Counter';
import { Vouter } from './components/Vouter/Vouter';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Users } from 'components/Users/Users';

// const Header = styled.h1`
//      color: ${({colorWhite})=>(colorWhite?'red':'#999')};

// `;


export const App = () => {
  return (
    <Layout>
    
  <Header title="Hello React!" />
      
      <Product />
      <Counter />
      <Vouter />
      <LoginForm />
      <Users />
    
    </Layout>     
  );
};
