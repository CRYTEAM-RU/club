import { Inter } from 'next/font/google'
import './globals.css'
// import PageTransition from './components/PageTransition'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Клуб Анонимных Стримеров',
  description: 'Сообщество стримеров, объединенных общей целью',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gradient-to-br from-gray-950 to-blue-950 min-h-screen text-white`}>
        <Header />
        {/* Удалены PageTransition и связанные комментарии */}
        {children}
      </body>
    </html>
  );
}
