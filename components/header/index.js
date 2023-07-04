'use client'

import Image from 'next/image';

import {Container,Row,Col} from 'react-bootstrap'
import { FaPhoneAlt, FaMailBulk ,FaMapMarkedAlt} from 'react-icons/fa'; 

import styles from "./styles.module.css";


function Header() {
  return (
    <header className={`${styles.header} header p-1 text-white d-none d-xl-flex`}>
        <Container>
            <Row>
                <Col sm={3} className="d-none d-xl-flex" >
                    <Image src="/images/brands/bmw.png" alt="HES-OTOMOTIV" className={styles.logo2} height={65} width={65}/>
                    <Image src="/images/brands/mini.png" alt="HES-OTOMOTIV" className={styles.logo2} height={65} width={154} />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col sm={3}>
                                    <FaPhoneAlt className={styles.icon}/> 
                                </Col>
                                <Col>
                                    <span className={styles.text}><strong>+ 90 532 240 90 58</strong> </span> <br /> <span className={`${styles.text} ${styles.textTel}`}><strong>0 (216) 630 16 16</strong> </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Row>
                                <Col sm={3}>
                                    <FaMapMarkedAlt className={styles.icon} /> 
                                </Col>
                                <Col className='p-2'>
                                    <span className={styles.text}> Gümrükçüler Sanayi Sitesi A Blok No:26 Ümraniye / İstanbul</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <FaMailBulk className={styles.icon} /> <span className={styles.text} >hesotomotiv34@gmail.com</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>


    </header>
  )
}

export default Header