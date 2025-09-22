'use client'

import React, { useState } from 'react'
import styles from './HeaderComponent.module.css'

import Image from 'next/image';

import logo from '../../public/images/logo.png';
import profileIcon from '../../public/images/Header/profileIcon.png';
import dropdownProfileIcon from '../../public/images/Header/dropdownProfileIcon.png';

interface HeaderProps {
  isDashboard: boolean;
  selectedItem?: string;
}

const HeaderComponent : React.FC<HeaderProps> = (props: HeaderProps) => {

  const [userName, setUserName] = useState('Name')
  const [userEmail, setUserEmail] = useState('Email')

  return (
    <div>
        <header className={props.isDashboard ? styles.headerDash : styles.headerLogin}>
            {!props.isDashboard && (
              <Image src={logo} alt='Correo de Yury Logo'/>
            ) }
            {props.isDashboard ? <h2 className={styles.headerText}>{props.selectedItem}</h2> : <h2 className={styles.headerText}>El correo de Yury</h2>}
            {props.isDashboard && (
              <div className={styles.headerProfile}>
                <Image src={profileIcon} alt='Imagen perfil'/>
                <div className={styles.headerProfileInfo}>
                  <h3 className={styles.headerProfileInfoName}>{userName}</h3>
                  <p className={styles.headerProfileInfoEmail}>{userEmail}</p>
                </div>
                <Image className={styles.headerProfileDropdown} src={dropdownProfileIcon} alt='Boton ditar perfil'/>
              </div>
            )}
        </header>
    </div>
  )
}

export default HeaderComponent;