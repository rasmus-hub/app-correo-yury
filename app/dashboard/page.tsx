'use client'

import HeaderComponent from '@/components/Header/HeaderComponent';
import SidebarComponent from '@/components/Sidebar/SidebarComponent';
import React, { useState } from 'react'

const Dashboard : React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Inicio');

  return (
    <div>
      <section className='section-dashboard'>
        <div className='sidebar-component'>
          <SidebarComponent onSelectItem={setSelectedItem} />
        </div>
        <div className='header-component'>
          <HeaderComponent isDashboard={true} selectedItem={selectedItem}/>
        </div>
      </section>
    </div>
  )
}

export default Dashboard;