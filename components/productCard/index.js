
'use client'
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';

function ProductCard() {
  return (
    <div>
      <div className="product_card">
        <div className="product_card__img p-2">
          <img src="/images/logos/bmwpng.png" alt="product" />
        </div>
        <h5 className="text-center mt-3">
          <strong>Ürün Başlık</strong>
        </h5>
        <div className="product_card__info p-3">
          <ul>
            <li>
              <strong className="text-danger">STOK KODU:</strong>234234234
            </li>
            <li>
              <strong className="text-danger">OEM NUMARASI:</strong>234234234
            </li>
            <li>
              <strong className="text-danger">MARKA:</strong>WENDER
            </li>
            <li>
              <strong className="text-danger">DURUM:</strong>SIFIR
            </li>
          </ul>
        </div>
        <div className="product_card__price">
          <h5>1.000 ₺</h5>
        </div>
        <div className="product_card__button">
          <Button
            className="product_card__button_whatsapp w-100 m-1"
            variant="success"
          >
            <FaWhatsapp /> İletişim
          </Button>
          <Button
            className="product_card__button_detail w-100 m-1"
            variant="warning"
          >
            <FaSearch /> Detay Gör
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
