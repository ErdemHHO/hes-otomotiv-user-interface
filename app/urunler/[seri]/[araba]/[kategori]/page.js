
import React from 'react'

import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";

export const metadata = {
  description: "BMW ve MINI otomobilleriniz için orijinal ve yüksek kaliteli yedek parçalar ve aksesuarlar. Geniş ürün yelpazemizle sizlere hizmet veriyoruz",
};



async function getData(araba,kategori) {

  const carSlug = araba;
  const categorySlug=kategori;
  
  const res = await fetch(`https://server-hesotomotiv.net/api/user/products/car/${carSlug}/category/${categorySlug}`,{
    cache: 'no-store'
  })

  return res.json();
}

async function getCategoryData() {

  const res = await fetch('https://server-hesotomotiv.net/api/user/categories',{
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function getCarData(araba) {

  const slug = araba;

  const res = await fetch(`https://server-hesotomotiv.net/api/user/cars/${slug}`,{
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getSeriData(seri) {
  
  const slug = seri;

  const res = await fetch(`https://server-hesotomotiv.net/api/user/series/${slug}`,{
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getKategoriData(kategori) {

  const slug = kategori;

  const res = await fetch(`https://server-hesotomotiv.net/api/user/categories/${slug}`,{
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function page({ params: {araba} , params:{kategori}, params:{seri}}) {

  const data = await getData(araba,kategori)
  const categoryData = await getCategoryData()
  const carData = await getCarData(araba)
  const seriData = await getSeriData(seri)
  const categoryData2 = await getKategoriData(kategori)

  return (
    <div className='icerik'>
      <div>
        <div className='mt-5'>
          <div className='container-fluid' >
            <NavigationBar seri={seriData} araba={carData} kategori={categoryData2} />
            <div className='row'>
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu data={categoryData} araba={araba} seri={seri} kategori={kategori}  />
              </div>
              <div className='col-xl-9'>
                <div className="product_card_container">
                  {data?.products?.map(product => (
                    <ProductCard key={product._id} data={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page