import '@/styles/index.scss'
import { url } from 'inspector'
import type { Metadata } from 'next'
import localFont  from 'next/font/local'


export const metadata: Metadata = {
  title: 'Портал магии',
  description: 'Узнать ответ на мучающий вопрос',
  icons: {
    icon: '/scr/assets/favicon/favicon.ico',
    apple: '/scr/assets/favicon/apple-touch-icon.png',
  },
  manifest:'/scr/assets/favicon/site.webmanifest',
  themeColor:'black',
}

const Antarctic = localFont({
  src: '../assets/fonts/Antarctic.otf',
  variable:'--font-antarctic'
})
const Gwen = localFont({
  src: [{
      path:'../assets/fonts/GwenTrialRegular.otf'
    },
    {
      path:'../assets/fonts/GwenTrialRegular.woff'
    }
  ],
  variable:'--font-gwen'
})
const Narziss = localFont({
  src: '../assets/fonts/NarzissProCyrillic.woff2',
  variable:'--font-narziss',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={
        `${Gwen.variable} ${Antarctic.variable} ${Narziss.variable}`
      }>{children}</body>
    </html>
  )
}

