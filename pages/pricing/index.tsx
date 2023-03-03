import React from 'react'
import { Inter } from '@next/font/google'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

const PricingPage = () => {
  return (
    <MainLayout>
      <h1 className={ inter.className }>Estas Navegando la pagina Pricing</h1>
    </MainLayout>
  )
}

export default PricingPage