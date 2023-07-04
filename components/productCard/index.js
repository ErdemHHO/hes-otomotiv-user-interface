
'use client'

import React from 'react'
import { Button } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa'

function ProductCard() {
  return (
    <div>
       <div className="box border border-4">
        <img src="/images/logos/bmwpng.png" alt="car part" />
        <h3 className='text-center'>Ürün Adı</h3>
        <span className="price text-danger">Satış Fiyatı TL</span>
        <div className="part-text">
            <p className="part-text">
                ÜRÜN NO: 11111111111 <br />
                OEM NO: 11111111111  <br />
                DURUM: 11111111111   <br />
                MARKA: 11111111111   <br />
            </p>
        </div>
        <div className="buttons">
            <Button variant="outline-success"><FaWhatsapp />Whatsapp İle Sipariş </Button>{' '}
            <Button variant="outline-dark">Detay Gör</Button>
        </div>		
    </div>
        <div className="box border border-4">
        <img src="/images/logos/bmwpng.png" alt="car part" />
        <h3 className='text-center'>Ürün Adı</h3>
        <span className="price text-danger">Satış Fiyatı TL</span>
        <div className="part-text">
            <p className="part-text">
                ÜRÜN NO: 11111111111 <br />
                OEM NO: 11111111111  <br />
                DURUM: 11111111111   <br />
                MARKA: 11111111111   <br />
            </p>
        </div>
        <div className="buttons">
            <Button variant="outline-success"><FaWhatsapp />Whatsapp İle Sipariş </Button>{' '}
            <Button variant="outline-dark">Detay Gör</Button>
        </div>		
    </div>
        <div className="box border border-4">
        <img src="/images/logos/bmwpng.png" alt="car part" />
        <h3 className='text-center'>Ürün Adı</h3>
        <span className="price text-danger">Satış Fiyatı TL</span>
        <div className="part-text">
            <p className="part-text">
                ÜRÜN NO: 11111111111 <br />
                OEM NO: 11111111111  <br />
                DURUM: 11111111111   <br />
                MARKA: 11111111111   <br />
            </p>
        </div>
        <div className="buttons">
            <Button variant="outline-success"><FaWhatsapp />Whatsapp İle Sipariş </Button>{' '}
            <Button variant="outline-dark">Detay Gör</Button>
        </div>		
    </div> 
    </div>
    
  )
}

export default ProductCard