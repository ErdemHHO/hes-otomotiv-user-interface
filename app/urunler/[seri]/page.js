
import React from 'react'

import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";


async function getData(seri) {

  const slug = seri;
  const res = await fetch(`http://localhost:4000/api/user/products/series/${slug}`)

  return res.json();
}

async function getCarData(seri) {

  const slug = seri;

  const res = await fetch(`http://localhost:4000/api/user/cars/series/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getSeriData(seri) {
  
  const slug = seri;

  const res = await fetch(`http://localhost:4000/api/user/series/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
  


async function page({ params: {seri} }) {

  const data = await getData(seri)
  const carData = await getCarData(seri)
  const seriData = await getSeriData(seri)
  
  return (
    <div className='icerik'>
      <div>
        <div className='mt-5'>
          <div className='container-fluid' >
            <div className='row'>
              <NavigationBar seri={seriData} />
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu data={carData} seri={seri} />
              </div>
              <div className='col-xl-9'>
                <div className="product_card_container">
                  {data.products.map(product => (
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