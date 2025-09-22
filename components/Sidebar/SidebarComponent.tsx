'use client'

import React, { useState } from 'react'
import styles from './SidebarComponent.module.css'

import Image from 'next/image';

import logo from '../../public/images/logo.png';
import sidebarButton from '../../public/images/Sidebar/sidebarButton.png';
import searchIcon from '../../public/images/Sidebar/searchIcon.png';
import homeIcon from '../../public/images/Sidebar/HomeIcon.png';
import calendarIcon from '../../public/images/Sidebar/CalendarIcon.png';
import meetingIcon from '../../public/images/Sidebar/MeetingIcon.png';
import chatIcon from '../../public/images/Sidebar/ChatIcon.png';
import notificationIcon from '../../public/images/Sidebar/NotificationIcon.png';
import settingsIcon from '../../public/images/Sidebar/settingsIcon.png';

interface SidebarProps {
    onSelectItem: (item: string) => void;
}

const SidebarComponent : React.FC<SidebarProps> = ({ onSelectItem }) => {

    const [isOpen, setIsOpen] = useState(true)

    const firstSidebarItems = [
        {id: 1, icon: homeIcon, text: 'Inicio'},
        {id: 2, icon: calendarIcon, text: 'Calendario'},
        {id: 3, icon: meetingIcon, text: 'Reunión'},
        {id: 4, icon: chatIcon, text: 'Chat'}
    ]

    const secondSidebarItems = [
        {id: 1, icon: notificationIcon, text: 'Notificaciones'},
        {id: 2, icon: settingsIcon, text: 'Configuración'}
    ]

    const handleItemSelect = (item: string) => {
        onSelectItem(item);
    }

    return (
        <div>
            <section className={isOpen ? styles.sidebar : styles.sidebarClosed}>
                <header className={styles.sidebarHeader}>
                    <Image src={logo} alt='Correo de Yury Logo' className={!isOpen ? styles.sidebarLogo : ''}/>
                    {isOpen && (
                        <>
                            <h2>Yury</h2>
                            <div className={styles.sidebarHeaderButton}>
                                <Image src={sidebarButton} alt='Boton sidebar' onClick={() => setIsOpen(!isOpen)}/>
                            </div>
                        </>
                    )}
                    {!isOpen && <Image src={sidebarButton} alt='Boton sidebar' onClick={() => setIsOpen(!isOpen)} className={styles.sidebarClosedButton}/>}
                </header>
                <div className={!isOpen ? styles.sidebarClosedItems : ''}>
                    {isOpen && <input type='text' placeholder='Buscar' className={styles.sidebarSearch}/>}
                    <hr className={styles.sidebarSeparator}/>
                    {firstSidebarItems.map((item) => (
                        <div key={item.id} className={styles.sidebarItem} onClick={() => handleItemSelect(item.text)}>
                            <Image src={item.icon} alt='Icono de buscar' className={styles.sidebarItemIcon} />
                            <h3 className={styles.sidebarItemText}>{isOpen && item.text}</h3>
                        </div>
                    ))}
                    <hr className={styles.sidebarSeparator}/>
                    {secondSidebarItems.map((item) => (
                        <div key={item.id} className={styles.sidebarItem} onClick={() => handleItemSelect(item.text)}>
                            <Image src={item.icon} alt='Icono de buscar' className={styles.sidebarItemIcon} />
                            <h3 className={styles.sidebarItemText}>{isOpen && item.text}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SidebarComponent;