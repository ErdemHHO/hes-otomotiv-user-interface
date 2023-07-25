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
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>HES OTOMOTİV | BMW ve MINI Otomotiv Yedek Parçaları</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="BMW ve MINI otomobilleriniz için orijinal ve yüksek kaliteli yedek parçalar ve aksesuarlar. Geniş ürün yelpazemizle sizlere hizmet veriyoruz." />
          <meta name="keywords" content="BMW, MINI, Mini Cooper, BMW F10, BMW F20 , BMW F30, otomotiv yedek parça, orijinal parçalar, yedek parça mağazası, otomobil aksesuarları" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="Turkish" />
          <meta name="author" content="HES OTOMOTİV" />
          <meta name="revisit-after" content="7 days" />
          <meta property="og:title" content="HES OTOMOTİV | BMW ve MINI Otomotiv Yedek Parçaları" />
          <meta property="og:description" content="BMW ve MINI otomobilleriniz için orijinal ve yüksek kaliteli yedek parçalar ve aksesuarlar. Geniş ürün yelpazemizle sizlere hizmet veriyoruz." />
          <meta property="og:image" content="https://hes-otomotiv.com/images/logos/HES-OTOMOTIV-LOGO.png" />
          <meta property="og:url" content="https://www.hes-otomotiv.com" />
          <meta property="og:type" content="website" />

          <meta
            name="description"
            content="BMW / MINI OTOMOTIV YEDEK PARÇA VE AKSESUARLARI"
          />
          <meta http-Equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
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
