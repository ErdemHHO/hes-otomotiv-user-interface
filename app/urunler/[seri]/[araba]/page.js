
import React from 'react'

import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";


async function getData(araba) {

  const slug = araba;
  
  const res = await fetch(`http://localhost:4000/api/user/products/car/${slug}`)

  return res.json();
}

async function getCategoryData() {

  const res = await fetch('http://localhost:4000/api/user/categories')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



async function page({ params: {araba} }) {


  const data = await getData(araba)
  const categoryData = await getCategoryData()

  return (
    <div className='icerik'>
      <div>
        <div className='mt-5'>
          <div className='container-fluid' >
            <div className='row'>
              <div className="col-xl-3 text-center d-flex justify-content-center">
                <SideMenu data={categoryData} />
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