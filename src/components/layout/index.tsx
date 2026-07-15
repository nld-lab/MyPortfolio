import { type PropsWithChildren } from 'react'

import Navbar from '../navbar'
import Footer from '../footer'

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
        <header>
            {/* Header content */}
            <Navbar />
            
        </header>
        <main className="flex flex-col items-center justify-center">{children}</main>
       <Footer />
    </div>
  )
}
