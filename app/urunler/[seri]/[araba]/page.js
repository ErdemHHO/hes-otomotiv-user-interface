
import React from 'react'

import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";

async function getData(araba) {

  const slug = araba;
  
  const res = await fetch(`http://3.75.212.3:3000/api/user/products/car/${slug}`)

  return res.json();
}

async function getCategoryData() {

  const res = await fetch('http://3.75.212.3:3000/api/user/categories')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getCarData(araba) {

  const slug = araba;

  const res = await fetch(`http://3.75.212.3:3000/api/user/cars/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getSeriData(seri) {
  
  const slug = seri;

  const res = await fetch(`http://3.75.212.3:3000/api/user/series/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
  



async function page({ params: {araba}, params:{seri} }) {


  const data = await getData(araba)
  const categoryData = await getCategoryData()
  const carData = await getCarData(araba)
  const seriData = await getSeriData(seri)

  

  return (
    <div className='icerik'>
      <div>
        <div className='mt-5'>
          <div className='container-fluid' >
            <div className='row'>
              <NavigationBar  seri={seriData} araba={carData}  />
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu data={categoryData} seri={seri} araba={araba} />
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