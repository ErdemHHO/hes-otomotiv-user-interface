'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import styles from "./styles.module.css";
import Link from 'next/link';
import NavbarSearchInput from '../navbarSearchInput';

function HNavbar() {

  return (
    <div className={styles.navbar} >
      <Navbar expand="xl" className='px-5 pt-3 text-center justify-content-center' id='navbar'>
        <Container fluid className='nav'>
          <Link href="/" >
            <Navbar.Brand>
              <Image src="/images/logos/HES-OTOMOTIV-LOGO.png" alt="Logo" className={styles.logo} width={90} height={60} />
              <span className={styles.baslik1}><strong >HES OTOMOTİV</strong> </span> {' '}
              <span className={styles.baslik2}><strong >BMW MINI YEDEK PARÇALARI</strong></span>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" >
                <span className={`${styles.navLink} nav-link`}>Anasayfa</span>
              </Link>
              <Link href="/hakkimizda">
                <span className={`${styles.navLink} nav-link`}>Hakkımızda</span>
              </Link>
              <Link href="/iletisim">
                <span className={`${styles.navLink} nav-link`}>İletişim</span>
              </Link>
              <Link href="/urunler">
                <span className={`${styles.navLink} nav-link`}>Ürünlerimiz</span>
              </Link>              
            </Nav>
            <NavbarSearchInput />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HNavbar;
