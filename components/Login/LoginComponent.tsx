'use client'

import React from 'react'
import styles from './LoginComponent.module.css'
import Link from 'next/link'

const LoginComponent : React.FC = () => {
    return (
        <div>
            <section className={styles.sectionLogin}>
                <h2>Inicio de Sesión</h2>
                <form className={styles.sectionLoginForm}>
                    <div className={styles.loginFormField}>
                        <label>Usuario</label>
                        <input type='username' placeholder='Ingresar usuario'/>
                    </div>
                    <div className={styles.loginFormField}>
                        <label>Contraseña</label>
                        <input type='password' placeholder='Ingresar contraseña'/>
                    </div>
                    <div className={styles.loginFormCheck}>
                        <input type='checkbox'/>
                        <label>Recordar datos</label>
                    </div>

                    <button className={styles.loginFormLoginButton}>
                        <Link href={'/dashboard'}>
                            Iniciar sesión
                        </Link>
                    </button>
                </form>

                <div className={styles.sectionLoginGoRegister}>
                    <Link href={'/register'}>
                        ¿No tienes cuenta? Registrate
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default LoginComponent