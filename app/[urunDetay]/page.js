
import React from 'react';
import ProductDetailImages from '@/components/productDetailImages';
import ProductDetailInfo from '@/components/productDetailInfo';


async function getProduct(urunDetay) {

  const productSlug = urunDetay;
  const res = await fetch(`https://server-hesotomotiv.net/api/user/product/${productSlug}`, {
    cache: 'no-store'
  });
  return res.json();
  
}

export async function generateMetadata({ params: {urunDetay} }) {

  const data = await getProduct(urunDetay);

  if (data && data.product) {
    return {
      description: data?.product?.title,
    };
  }
  return {
    description: "Ürün not found",
  };
}


async function Page({ params: {urunDetay} }) {
  
  const data = await getProduct(urunDetay);

  return (
<>
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
</>

  );
}

export default Page;
