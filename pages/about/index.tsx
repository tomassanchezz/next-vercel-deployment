import React from 'react'
import { Inter } from '@next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import DarkLayout from '@/components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <h1 className={ inter.className }>Estas Navegando la pagina About</h1>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) { 
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}