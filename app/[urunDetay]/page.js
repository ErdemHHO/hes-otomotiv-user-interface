
import React from 'react';
import ProductDetailImages from '@/components/productDetailImages';
import ProductDetailInfo from '@/components/ProductDetailInfo';

async function getProduct(urunDetay) {

  const productSlug = urunDetay;
  const res = await fetch(`http://localhost:4000/api/user/product/${productSlug}`);
  return res.json();
  
}

async function Page({ params: {urunDetay} }) {
  
  const data = await getProduct(urunDetay);

  return (
    <main className='icerik'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6' >
            <ProductDetailImages data={data?.product?.image_urls} />
          </div>
          <div className='col-xl-6' >
            <ProductDetailInfo data={data.product} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
