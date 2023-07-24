import React from 'react';
import Link from 'next/link';

function SideMenu({ data, seri, araba, kategori }) {
  
  const categories = data.categories;

  return (
    <div className='mt-5 text-center sideMenu'>
      <ul className='sideMenu1' >
        {categories.map((item) => {
          let url = `/urunler/${item.slug}`;

          if (seri && !araba && !kategori) {
            url = `/urunler/${seri}/${item.slug}`;
          }
          else if ( seri && araba && !kategori) {
            url = `/urunler/${seri}/${araba}/${item.slug}`;
          }
          else if ( seri && araba && kategori) {
            url = `/urunler/${seri}/${araba}/${item.slug}`;
          }
          else{
            url = `/urunler/${item.slug}`;
          }

          return (
            <Link href={url} key={item._id}>
              <li className='list-group-item menuButton'>{item.name}</li>
            </Link>
          );
        })}
      </ul>

      <div className="dropdown sideMenu2 d-lg-none ">
        <Link className="btn btn-outline-dark" href="/urunler" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          KATEGORİ SEÇİNİZ
        </Link>
        <ul className="dropdown-menu">
        {categories.map((item) => {
          let url = `/urunler/${item.slug}`;

          if (seri && !araba && !kategori) {
            url = `/urunler/${seri}/${item.slug}`;
          }
          else if ( seri && araba && !kategori) {
            url = `/urunler/${seri}/${araba}/${item.slug}`;
          }
          else if ( seri && araba && kategori) {
            url = `/urunler/${seri}/${araba}/${item.slug}`;
          }
          else{
            url = `/urunler/${item.slug}`;
          }

          return (
            <Link href={url} key={item._id}>
              <li className='dropdown-item'>{item.name}</li>
            </Link>
          );
        })}
      </ul>

      </div> 

    </div>
  );
}

export default SideMenu;
