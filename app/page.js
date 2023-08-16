
import BrandSlider from "@/components/brandSlider";
import SideMenu from "@/components/sideMenu";
import HomeBgImg from "@/components/homeBgImg";
import HomeSearchBar from "@/components/HomeSearchBar";
import ProductCard from "@/components/productCard";

import Link from 'next/link'


async function getData() {
  const res = await fetch('https://server-hesotomotiv.net/api/user/products', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


async function getSeriData() {

  const res = await fetch('https://server-hesotomotiv.net/api/user/series',{
    cache: 'no-store'
  })
   
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function Home() {

  const data = await getData();
  const seriData = await getSeriData();

  return (
    <main>

      <div>
        <div className="container" >
          <div className="row">
            <div className='col-xl-3 text-center d-none d-md-flex justify-content-center'>
              <SideMenu data={seriData} />
            </div>
            <div className='col-xl-9 '>
              <HomeBgImg />
            </div>
          </div>
        </div>
      </div>

      <HomeSearchBar/>

      <h1 className="text-center m-2">
          <strong>YENİ ÜRÜNLER</strong>
      </h1>
      <div className="product_card_container">
        {data?.products?.slice(0, 20).map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
      <div className="text-end text-denger mt-1 mx-5 p-3" >
        <Link href="/urunler">
        <span  className="text-danger border-bottom">Tüm Ürünleri Gör</span>
        </Link>
      </div>
      <BrandSlider />
    </main>
  )
}
