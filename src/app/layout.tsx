import './globals.css'
import type { Metadata } from 'next'
import {Providers} from "./provaiders"


export const metadata: Metadata = {
  title: 'clon de twitter',
  description: 'clon de twitter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>   
    </html>
  )
}
