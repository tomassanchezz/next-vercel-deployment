import React from 'react'
import { Inter } from '@next/font/google'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1 className={ inter.className }>Estas Navegando la pagina Home</h1>
    </MainLayout>
  )
}