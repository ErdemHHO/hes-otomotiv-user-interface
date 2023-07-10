
import React from 'react'

import { FaPhoneAlt } from 'react-icons/fa'; 

import styles from "./styles.module.css";

function HomeBgImg() {
  return (
    <div className={styles.main}>
        <div className='container-fluid d-none d-xl-flex'>
          <div className='row'>
            <div className='col-xl-6'>
              <img src="/images/logos/HES-OTOMOTIV-LOGO1.png" alt="HES-OTOMOTIV" className={styles.hesLogo1}></img>
            </div>
            <div className={`${styles.baslik} col-xl-6`} >
              <h5 className='text-decoration-underline'><strong>BMW MINI COOPER YEDEK PARÇALARI</strong></h5>
              <h5 className='text-primary'>
                <FaPhoneAlt className={styles.icon}/>
                +90 0532 240 90 58
              </h5>
            </div>
          </div>
        </div>
        <div className={`${styles.home} d-none d-xl-flex`}>
            <img src="/images/logos/bmwpng.png" alt="HES-OTOMOTIV" className={styles.bmwCar}></img>
        </div>
        {/* <div className='d-xl-none d-lg-flex'>
            <img src="/images/logos/bmwpng.png" alt="HES-OTOMOTIV" className={styles.bmwCar2} ></img>
            <img src="/images/logos/HES-OTOMOTIV-LOGO1.png" alt="HES-OTOMOTIV" className={styles.bmwCar2} ></img>
        </div> */}
    </div>

  )
}

export default HomeBgImg