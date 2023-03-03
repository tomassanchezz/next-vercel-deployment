import React from 'react'
import { Inter } from '@next/font/google'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className={ inter.className }>Estas Navegando la pagina Contact</h1>
    </MainLayout>
  )
}