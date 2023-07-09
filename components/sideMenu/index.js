
import React from 'react';
import styles from "./styles.module.css";

function SideMenu({ data }) {
  
    const categories= data.categories;

  
    return (
      <div className='mt-5'>
        <ul>
          {
            categories.map((item) => (
              <li key={item._id} className=' list-group-item menuButton '>{item.name}</li>
            ))
          }
        </ul>
      </div>
    );
}

export default SideMenu

