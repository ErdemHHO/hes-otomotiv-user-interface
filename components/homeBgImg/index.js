'use client'


import React from 'react'

import { Container, Row,Col } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'; 

import styles from "./styles.module.css";

function HomeBgImg() {
  return (
    <div className={styles.main}>
        <Container fluid className='d-none d-xl-flex'>
          <Row>
            <Col xl={4}>
              <img src="/images/logos/HES-OTOMOTIV-LOGO1.png" alt="HES-OTOMOTIV" className={styles.hesLogo1}></img>
            </Col>
            <Col className={styles.baslik} xl={8}>
              <h5 className='text-decoration-underline'><strong>BMW MINI COOPER YEDEK PARÇALARI</strong></h5>
              <h5 className='text-primary'>
                <FaPhoneAlt className={styles.icon}/>
                +90 0532 240 90 58
              </h5>
            </Col>
          </Row>
        </Container>
        <div className={`${styles.home} d-none d-xl-flex`}>
            <img src="/images/logos/bmwpng.png" alt="HES-OTOMOTIV" className={styles.bmwCar}></img>
        </div>
        <div className='d-xl-none d-lg-flex'>
            <img src="/images/logos/bmwpng.png" alt="HES-OTOMOTIV" className={styles.bmwCar2} ></img>
            <img src="/images/logos/HES-OTOMOTIV-LOGO1.png" alt="HES-OTOMOTIV" className={styles.bmwCar2} ></img>
        </div>
    </div>

  )
}

export default HomeBgImg