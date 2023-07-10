import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const ProductDetailInfo = ({ data }) => {

  const product= {
    title: data.title,
    stockCode: data.stockCode,
    oemNumber: data.oemNumber,
    brand_id: data.brand_id,
    status: data.status,
    oldPrice: data.oldPrice,
    sellingPrice: data.sellingPrice,
    category_id: data.category_id,
    series_id: data.series_id,
    car_id: data.car_id,
    slug: data.slug,
  }


  return (
    <div className='product_detail_info'>
      <h3 className='text-center border-bottom mt-3'>
        <strong>{product.title}</strong>
      </h3>

      <ul className='product_detail_info_list p-5'>
        <li>
          <strong className="text-danger">STOK KODU:</strong> {product.stockCode}
        </li>
        <li>
          <strong className="text-danger">OEM NUMARASI:</strong> {product.oemNumber}
        </li>
        <li>
          <strong className="text-danger">ÜRÜN MARKASI:</strong> {product.brand_id}
        </li>
        <li>
          <strong className="text-danger">DURUM:</strong> {product.status ? 'Sıfır' : 'İkinci El'}
        </li>
        <li>
          <strong className="text-danger">SATIŞ TÜRÜ:</strong> {product.salesFormat ? 'Adet' : 'Takım'}
        </li>
      </ul>

      <div className='text-center'>
        <span className="price">
          <del className='text-secondary'> {product.oldPrice} ₺</del>
          <span className='text-success price'> {product.sellingPrice} ₺</span>
        </span>
      </div>

      <Link href={`https://api.whatsapp.com/send/?phone=%2B9053224090586&text=Merhaba%21++${product.stockCode}+stok+kodlu+%C3%BCr%C3%BCn%C3%BCn%C3%BCz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0`} target="_blank">
        <div className='product_detail_info_button'>
          <button className='product_detail_info_button_whatsapp w-100 m-1'>
            <FaWhatsapp size={64} /> Whatsapp İle İletişim
          </button>
        </div>
      </Link>

      <div className='product_detail_info_description mt-3 p-3 bg-light'>
        <h5 className='text-center border-bottom m-2'>
          <strong>ÜRÜN AÇIKLAMASI</strong>
        </h5>
        <ul>
          <li>{product.title}</li>
          <li>OEM NO: {product.oemNumber}</li>
          <li>MARKA: {product.brand_id}</li>
          <li>
            Resmi tatiller dışında gün içinde 16.00'a kadar yaptığınız tüm satın almalarda aldığınız her ürün aynı gün içinde anlaşmalı kargo şirketine teslim edilerek indirimli bir şekilde adresinize sevk edilir.
          </li>
          <li>{product.salesFormat ? 'Adet' : 'Takım'} Fiyatıdır.</li>
          <li>Bilgi Almak İçin Yazabilirsiniz.</li>
        </ul>
      </div> 
    </div>
  );
};

export default ProductDetailInfo;
