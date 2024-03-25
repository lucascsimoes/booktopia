import { Caveat, Quicksand, Merienda } from 'next/font/google'

export const quicksand = Quicksand({
    subsets: ['latin'],
    variable: "--font-primary",
    display: 'swap',
})
 
export const merienda = Merienda({
  subsets: ['latin'],
  variable: "--title",
  display: 'swap',
})
 
export const caveat = Caveat({
  subsets: ['latin'],
  variable: "--subtitle",
  display: 'swap',
})
 
