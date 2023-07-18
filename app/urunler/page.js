
import React from 'react'
import SideMenu from "@/components/sideMenu";
import ProductCard from "@/components/productCard";
import NavigationBar from "@/components/navigationBar";

async function getData() {

  const res = await fetch('http://3.75.212.3:3000/api/user/products',{
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getSeriData() {

  const res = await fetch('http://3.75.212.3:3000/api/user/series',{
    cache: 'no-store'
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function page() {
  const data = await getData()
  const seriData = await getSeriData()

  return (
    <div className='icerik' >
      <div className='mt-5'>
        <div className='container-fluid' >
          <div className='row'>              
            <NavigationBar/>
            <div className="col-md-3 text-center d-flex justify-content-center">
              <SideMenu data={seriData} />
            </div>
            <div className='col-md-9'>
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
  )
}

export default page
