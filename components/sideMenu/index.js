import React from 'react';
import Link from 'next/link';

function SideMenu({ data, seri, araba, kategori }) {
  
  const categories = data.categories;

  return (
    <div className='mt-5 text-center'>
      <ul>
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
    </div>
  );
}

export default SideMenu;
