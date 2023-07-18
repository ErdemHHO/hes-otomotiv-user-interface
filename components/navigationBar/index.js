import React from 'react';
import { FaHome } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function NavigationBar({ seri, araba, kategori }) {

  return (
    <div className='container-fluid d-none d-md-flex bg-light text-center justify-content-center '>
      <Link href="/" className="text-decoration-none text-dark">
        <span>
          <FaHome size={32} className="m-1" />
        </span>
      </Link>
      <BsArrowRight size={32} className="m-1" />
      <Link href="/urunler" className="text-decoration-none text-dark pt-1 m-1 navigation-link">
        <span >
          <strong>Ürünler</strong>
        </span>
      </Link>
      {seri && (
        <Link href={`/urunler/${seri.seri.slug}`} className="text-decoration-none text-dark ">
          <BsArrowRight size={32} className="m-1 " />
          <span className='navigation-link' ><strong>{seri.seri.name}</strong></span>
        </Link>
      )}
      {seri && araba && (
        <Link href={`/urunler/${seri.seri.slug}/${araba.car.slug}`} className="text-decoration-none text-dark ">
          <BsArrowRight size={32} className="m-1 " />
          <span className='navigation-link' ><strong>{araba.car.name}</strong></span>
        </Link>
      )}
      {seri && araba && kategori && (
        <Link href={`/urunler/${seri.seri.slug}/${araba.car.slug}/${kategori.category.slug}`} className="text-decoration-none text-dark">
          <BsArrowRight size={32} className="m-1" />
          <span className='navigation-link' ><strong>{kategori.category.name}</strong></span>
        </Link>
      )}
    </div>
  );
}

export default NavigationBar;
