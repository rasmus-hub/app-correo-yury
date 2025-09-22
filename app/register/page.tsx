import React from 'react'

import HeaderComponent from '@/components/Header/HeaderComponent';
import RegisterComponent from '@/components/Register/RegisterComponent';

const Register : React.FC = () => {
  return (
    <div>
        <HeaderComponent isDashboard={false} />
        <section className='section-login'>
          <RegisterComponent />
        </section>
    </div>
  )
}

export default Register;
