import Appsidebar from '@/components/Appsidebar';
import Topbar from '@/components/Topbar';
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer';
const Layout = () => {
  return (
    //topbar
    //sidebar

    <SidebarProvider>
      <Appsidebar></Appsidebar>
      <Topbar></Topbar>
      <main className='w-full'>
        <div className='w-full min-h-[calc(100vh-40px)]'>
          <Outlet></Outlet>
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}

export default Layout
