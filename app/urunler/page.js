
import React from 'react'
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";

async function getData() {

  const res = await fetch('http://localhost:4000/api/user/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getSeriData() {

  const res = await fetch('http://localhost:4000/api/user/series')
   
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function page() {
  const data = await getData()
  const seriData = await getSeriData()

  return (
    <div>
      <div className='mt-5'>
        <div className='container-fluid' >
          <div className='row'>
            <div className="col-xl-3 text-center d-flex justify-content-center">
              <SideMenu data={seriData} />
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
  )
}

export default page
