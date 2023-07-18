import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

import Head from 'next/head'

import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatsappButton from "@/components/whatsappButton";

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <title>HES OTOMOTİV | Bmw Mini Otomotiv Yedek Parcalari</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta
            name="description"
            content="BMW / MINI OTOMOTIV YEDEK PARÇA VE AKSESUARLARI"
          />
        </head>
      <body>
        <Header />
        <Navbar />
        <main>
          {children}
        </main>
        {/* <WhatsappButton /> */}
        <Footer />


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script>
      </body>     
    </html>
  )
}
