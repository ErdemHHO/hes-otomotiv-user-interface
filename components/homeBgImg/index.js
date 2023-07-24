
import React from 'react'

import { FaPhoneAlt } from 'react-icons/fa'; 

import styles from "./styles.module.css";

import Link from 'next/link'

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
                <Link href={`tel:+905322409058`} target="_blank" >
                  <FaPhoneAlt className={styles.icon}/>
                  +90 0532 240 90 58
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className={`${styles.home} d-none d-xl-flex`}>
            <img src="/images/logos/bmwpng.png" alt="HES-OTOMOTIV" className={styles.bmwCar}></img>
        </div>
        {/* <div className='d-xl-none d-flex justify-content-center'>
            <img src="/images/brands/bmw.png" alt="HES-OTOMOTIV" className={styles.logo2} height={60} width={60} />
            <img src="/images/brands/mini.png" alt="HES-OTOMOTIV" className={styles.logo2} height={60} width={100} />
        </div> */}
    </div>

  )
}

export default HomeBgImg