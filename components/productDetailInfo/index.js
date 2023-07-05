'use client'

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const ProductDetailInfo = () => {


  return (
    <div className='product_detail_info' >
      <h3 className='text-center border-bottom mt-3' ><strong> ÜRÜN BAŞLIK </strong></h3>

      <ul className='product_detail_info_list p-5' >
        <li>
          <strong className="text-danger">STOK KODU:</strong> 234234234
        </li>
        <li>
          <strong className="text-danger">OEM NUMARASI:</strong> 234234234
        </li>
        <li>
          <strong className="text-danger">ÜRÜN MARKASI:</strong> Wender PArts
        </li>
        <li>
          <strong className="text-danger">DURUM:</strong> Sıfır
        </li>
        <li>
          <strong className="text-danger">SATIŞ TÜRÜ:</strong> Adet
        </li>
      </ul>

      <div className='text-center'>
        <span className="price"> <del className='text-secondary'> 1500 ₺</del>
        <span className='text-success price'> 1000 ₺</span> </span>
      </div>

      <div className='product_detail_info_button'>
        <button className='product_detail_info_button_whatsapp w-100 m-1' >
          <FaWhatsapp size={64} /> Whatsapp İle İletişim
        </button>
      </div>

      <div className='product_detail_info_description mt-3 p-3 bg-light' >
        <h5 className='text-center border-bottom m-2' ><strong> ÜRÜN AÇIKLAMASI </strong></h5>
        <ul>
          <li>
            Bmw Ön Fren Balata G20 G11-12 G30 OEM 34116888457
          </li>
          <li>
            OEM NO: 34116888457
          </li>
          <li>
            MARKA: BMW  
          </li>
          <li>
            Resmi tatiller dışında gün içinde 16.00'a kadar yaptığınız tüm satın almalarda aldığınız her ürün aynı gün içinde anlaşmalı kargo şirketine teslim edilerek indirimli bir şekilde adresinize sevk edilir.
          </li>
          <li>
            Takım Fiyatıdır.
          </li>
          <li>
            Bilgi Almak İçin Yazabilirsiniz.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
