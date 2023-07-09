
import React from 'react';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

function ProductCard({ data }) {

  const product= {
    name: data.name,
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
    image:data.image_urls[0],
    slug: data.slug,
  }

  return (
    <div>
      <div className="product_card">
        <div className="product_card__img p-2">
          <img src={product.image} alt={product.title}/>
        </div>
        <h5 className="text-center mt-3">
          <strong> 
            {product.name}
          </strong>
        </h5>
        <div className="product_card__info p-3">
          <ul>
            <li>
              <strong className="text-danger">STOK KODU:</strong> {product.stockCode}
            </li>
            <li>
              <strong className="text-danger">OEM NUMARASI:</strong> {product.oemNumber}
            </li>
            <li>
              <strong className="text-danger">MARKA:</strong> {product.brand_id}
            </li>
            <li>
              <strong className="text-danger">DURUM:</strong> {product.status ? 'SIFIR' : 'İKİNCİ EL'}
            </li>
          </ul>
        </div>

        <div className="product_card__price">
          <span className="price">
            <del className='text-secondary'> {product.oldPrice} ₺</del>
            <span className='text-success price'> {product.sellingPrice} ₺</span>
          </span>
        </div>
        
        <div className="product_card__button">
          <div className="product_card__button_whatsapp w-100 m-1">
            <FaWhatsapp /> İletişim
          </div>
          <div className="product_card__button_detail w-100 m-1">
            <FaSearch /> Detay Gör
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
