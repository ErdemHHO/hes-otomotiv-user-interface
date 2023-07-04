import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />



        
      </body>     
    </html>
  )
}
