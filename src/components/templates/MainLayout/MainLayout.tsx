import Header from '@/organisms/Header/Header'
import { FC } from 'react'

const MainLayout: FC = ({ children }) => {
   return (
      <div className="flex flex-col min-h-screen">
         <header>
            <Header />
         </header>
         <main className="flex-grow bg-gray-20">{children}</main>
         <footer className="h-40 bg-gray-50 border-t border-gray-100">asf</footer>
      </div>
   )
}

export default MainLayout
