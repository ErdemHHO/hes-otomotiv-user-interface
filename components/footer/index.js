'use client'

import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiSahibinden } from 'react-icons/si';

import styles from "./styles.module.css";
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Container fluid className={`${styles.bgFooter}  ${styles.bgFooter} text-center p-5 text-white footer mt-5`}>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <Image src="/images/logos/HES-OTOMOTIV-LOGO1-1.svg" alt="HES-OTOMOTIV-LOGO" className={styles.logoFooter} width={150} height={150} />
              </Col>
              <Col md={8}>
                <h4 className={styles.baslik1}><strong>HES OTOMOTİV</strong></h4>
                <h5 className={styles.baslik2}><strong>BMW MINI COOPER YEDEK PARÇALARI</strong> </h5>
                <div className={styles.textPrimary}>
                  <FaWhatsapp size={32} className={`${styles.icon} ${styles.whatsapp}`} /> {'   '}
                  <FaFacebookF size={32} className={`${styles.icon} ${styles.facebook}`} /> {'   '}
                  <FaInstagram size={32} className={`${styles.icon} ${styles.instagram}`} /> {'   '}
                  <SiSahibinden size={32} className={`${styles.icon} ${styles.sahibinden}`} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <h4>Kurumsal</h4>
            <ul>
              <li>
                Hakkımızda
              </li>
              <li>
                İletişim
              </li>
              <li>
                Vizyon
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>TESLİMAT & İADE</h4>
            <ul>
              <li>
                Teslimat Bilgileri
              </li>
              <li>
                İade & Değişim
              </li>
              <li>
                Mesafeli Satış Sözleşmesi
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>Admin</h4>
            <ul>
              <li>
                Admin Girişi
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        Designed By | <span className={styles.designedBy}> Erdem Hacıhasanoğlu</span>
      </Container>
    </div>
  )
}

export default Footer;
