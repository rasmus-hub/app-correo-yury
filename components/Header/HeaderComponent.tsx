'use client'

import React, { useState } from 'react'
import styles from './HeaderComponent.module.css'

import Image from 'next/image';

import logo from '../../public/images/logo.png';

const HeaderComponent : React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
        <header className={styles.header}>
            <Image src={logo} alt='Correo de Yury Logo'/>
            <h2 className={styles.headerText}>El correo de Yury</h2>
        </header>
    </div>
  )
}

export default HeaderComponent;