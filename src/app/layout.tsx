import '@/styles/index.scss'
import type { Metadata } from 'next'
import localFont  from 'next/font/local'
import { Oranienbaum } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Портал магии',
  description: 'Узнать ответ на мучающий вопрос',
  icons: {
    icon: "/assets/favicon/favicon.ico",
    apple: '/assets/favicon/apple-touch-icon.png',
  },
  manifest: '/assets/favicon/site.webmanifest',
  themeColor:'black',
}

const Antarctic = localFont({
  src: '../../public/assets/fonts/Antarctic.otf',
  variable:'--font-antarctic',
})
const Gwen = localFont({
  src: [{
      path:'../../public/assets/fonts/GwenTrialRegular.otf'
    },
    {
      path:'../../public/assets/fonts/GwenTrialRegular.woff'
    }
  ],
  variable:'--font-gwen'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={
        `${Gwen.variable} ${Antarctic.variable}`
      }>{children}</body>
    </html>
  )
}

