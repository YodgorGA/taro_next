import '@/styles/index.scss'
import type { Metadata } from 'next'
import localFont  from 'next/font/local'
import Icon from '@/assets/favicon/favicon.ico';


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
const Narziss = localFont({
  src: [{
    path:'../../public/assets/fonts/NarzissProCyrillic.ttf',
    weight:'400',
    style:'normal'
  },
  {
    path:'../../public/assets/fonts/NarzissProCyrillic.woff',
    weight:'400',
    style:'normal'
  },
  {
    path:'../../public/assets/fonts/NarzissProCyrillic.woff2',
    weight:'400',
    style:'normal'
  }
],
  variable:'--font-narziss'
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

