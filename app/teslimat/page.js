
'use client'

import React from 'react'

import { Container,Row,Col } from "react-bootstrap";

import SeriesMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";

export const metadata = {
  description: "BMW ve MINI otomobilleriniz için orijinal ve yüksek kaliteli yedek parçalar ve aksesuarlar. Geniş ürün yelpazemizle sizlere hizmet veriyoruz",
};


function page() {
  return (
    <main className='icerik container text-center' >
      <h1 className='baslik-h1' > Teslimat </h1>
      <p>
      Hes Otomotiv olarak, müşterilerimize hızlı ve güvenilir bir teslimat hizmeti sunmak bizim için önemlidir. Siparişlerinizi en kısa sürede size ulaştırmak için özen gösteriyoruz ve yedek parçalarınızın güvenli bir şekilde elinize geçmesini sağlıyoruz.
      <br />
      İşbirliği yaptığımız lojistik firmalarıyla, teslimat sürecini en iyi şekilde yönetmek ve sizlere sorunsuz bir alışveriş deneyimi sunmak için çalışıyoruz. Siparişlerinizin paketlenmesi, taşınması ve takibi konusunda titizlikle ilgileniyoruz.
      <br />
      Genellikle, siparişlerinizin işleme alınmasından sonra aynı gün içinde kargoya verilmesini sağlıyoruz. Teslimat süresi, bulunduğunuz bölgeye ve lojistik firmasının hizmetine bağlı olarak değişiklik gösterebilir. Siparişinizin kargo takip numarasını size iletiyoruz, böylece teslimat sürecini takip edebilirsiniz.
      <br />
      Paketlerinizin güvenliği bizim için önemlidir. Siparişleriniz, özenle paketlenerek taşıma sırasında hasar görmesini önlemek için uygun koruma önlemleri alınmaktadır. Ancak, teslim aldığınız paketi kontrol etmeniz ve herhangi bir hasar veya eksiklik durumunda bize derhal bildirmeniz önemlidir. Müşteri memnuniyetini sağlamak adına, olası sorunları hızlı bir şekilde çözmek için elimizden geleni yapacağız.
      <br />
      Teslimat politikamız, müşteri memnuniyetini sağlamak ve sizlere en iyi alışveriş deneyimini sunmak üzerine odaklanmıştır. Sizlere değer veriyor ve siparişlerinizi özenle işliyoruz. Her adımda şeffaflık ve iletişim ilkesini benimseyerek, teslimat sürecinde herhangi bir sorun yaşanması durumunda sizlere destek sağlamak için buradayız.
      </p>
      <h1 className='baslik-h1 ' > İade & Değişim </h1>
      <ol className='text-start'>
        <li>
        Elektronik ürünler işlem gördükten sonra iadesi kabul edilmemektedir.
        </li>
        <li>
        Kullanılmış, tahrip edilmiş veya benzer şekilde zarar görmüş ürünlerin iadesi kabul edilmemektedir.
        </li>
        <li>
        Sevkiyat sırasında zarar gördüğünüzü düşündüğünüz paketleri, teslim aldığınız firma yetkilisi önünde açıp kontrol etmeniz önemlidir. Eğer üründe herhangi bir zarar tespit ederseniz, kargo firmasına tutanak tutturarak ürünü teslim almayınız. Ürünün teslim alındıktan sonra kargo firmasının görevini tam olarak yerine getirdiğini kabul etmiş olduğunuzu unutmayınız.
        </li>
        <li>
        Üründe ve ambalajında herhangi bir açılma, bozulma, kırılma, tahrip, yırtılma, kullanılma veya benzer durumları tespit ettiğiniz hallerde ve ürünün müşteriye teslim edildiği andaki hali ile iade edilememesi durumunda ürünü iade almayacak ve bedelini iade etmeyecektir.
        </li>
        <li>
        İade etmek istediğiniz ürünlerde kendi hatanızdan kaynaklı yanlış ürün sipariş verme veya yukarıda belirtilmeyen diğer nedenler dışında ise iadeler kabul edilecek ve ürün iadesi teslim alındıktan sonra ücret iadesi gerçekleştirilecektir.
        </li>
        <li>
        İade veya değişim yapmak istediğiniz ürünler için müşteri hizmetleri ekibimizle iletişime geçmenizi öneririz. Size gerekli bilgileri sağlayacak ve süreci yönlendirecektir.
        </li>
      </ol>
  </main>
  )
}

export default page