'use client'

import React from 'react'
import styles from './RegisterComponent.module.css'
import Link from 'next/link'

// AQUI QUEDASTE APLICANDO NUEVOS ESTILOS PARA EL REGISTRO

const RegisterComponent : React.FC = () => {
    return (
        <div>
            <section className={styles.sectionRegister}>
                <h2>Registro</h2>
                <form className={styles.sectionRegisterForm}>
                    <div className={styles.registerFormField}>
                        <label>Usuario</label>
                        <input type='username' placeholder='Ingresar usuario'/>
                    </div>
                    <div className={styles.registerFormField}>
                        <label>Contraseña</label>
                        <input type='password' placeholder='Ingresar contraseña'/>
                    </div>

                    <button className={styles.registerFormRegisterButton}>Registrar cuenta</button>
                </form>

                <div className={styles.sectionRegisterGoLogin}>
                    <Link href={'/login'}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default RegisterComponent