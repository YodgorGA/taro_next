import { StoreUpdater } from '@/components/shared'
import '@/styles/index.scss'
import type { Metadata } from 'next'
import localFont  from 'next/font/local'
import Head from 'next/head'


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
  src: [{
    path:'./../../public/fonts/Antarctic.otf',
    },
    {
      path:'./../../public/fonts/Antarctic.woff',
    },
  ],
  weight:'400',
  style:'normal',
  variable:'--font-antarctic',
})
const Gwen = localFont({
  src: [{
      path:'./../../public/fonts/GwenTrialRegular.otf',
    },
    {
      path:'./../../public/fonts/GwenTrialRegular.woff',
    }
  ],
  weight:'400',
  style:'normal',
  variable:'--font-gwen'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(95657739, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
      });
      </script>
      </Head>
      <body className={`${Gwen.variable} ${Antarctic.variable}`}>
        <StoreUpdater/>
        {children}
        </body>
    </html>
  )
}

