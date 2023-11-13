import { StoreUpdater } from '@/components/shared'
import '@/styles/index.scss'
import type { Metadata } from 'next'
import localFont  from 'next/font/local'


export const metadata: Metadata = {
  title: 'Портал магии',
  description: 'Узнать ответ на мучающий вопрос',
  icons: {
    icon: '/assets/favicon/favicon.ico',
    apple: '/assets/favicon/apple-touch-icon.png',
  },
  manifest:'/assets/favicon/site.webmanifest',
  themeColor:'black',
}

const Antarctic = localFont({
  src: './../../public/fonts/Antarctic.otf',
  variable:'--font-antarctic'
})
const Gwen = localFont({
  src: [{
      path:'./../../public/fonts/GwenTrialRegular.otf'
    },
  ],
  variable:'--font-gwen'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={
        `${Gwen.variable} ${Antarctic.variable}`
      }>
        <StoreUpdater/>
        {children}
        </body>
    </html>
  )
}

