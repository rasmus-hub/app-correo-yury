import React from 'react'

import HeaderComponent from '@/components/Header/HeaderComponent';
import LoginComponent from '@/components/Login/LoginComponent';

const Login : React.FC = () => {
  return (
    <div>
        <HeaderComponent isDashboard={false} />
        <section className='section-login'>
          <LoginComponent />
        </section>
    </div>
  )
}

export default Login;

// ESTO TIENE QUE SER UNA PLATAFORMA DE VIDEOLLAMADAS COMO PRACTICA