import Navbar from '../components/Navbar'
import './globals.css'
import { Manrope } from 'next/font/google'

const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafo Alfaro | Estudio Creativo',
  description:
    'Estudio de Arquitectura y Diseño de Interiores especializado, buscamos mejorar la calidad de vida de nuestros clientes y usarios a través de nuestros conceptos en medio de una permanente búsqueda de la perfección y simplicidad.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
