'use client'


import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

import styles from "./styles.module.css";

function HNavbar() {
  const myComponentStyles = {
    display: "block",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "10",
    backgroundColor: "#fff",
    boxShadow: "0 4px 4px -2px rgba(0,0,0,0.2), 0 2px 8px 0 rgba(0,0,0,0.14), 0 6px 10px 0 rgba(0,0,0,0.12)",
    marginTop: "75px",
    transition: "margin-top 0.4s ease-in-out"
  };
  const [myStyles, setMyStyles] = useState(myComponentStyles);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 1200px)').matches) {
      function handleScroll() {
        const newStyles = {
          ...myComponentStyles,
          marginTop: window.scrollY > 30 ? '0px' : '75px',
        };
        setMyStyles(newStyles);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // if the screen size is smaller than xl, set marginTop to 0
      setMyStyles({ ...myComponentStyles, marginTop: '0' });
    }
  }, []);

  return (
    <div>
      <Navbar style={myStyles} expand="xl" className='px-5 pt-3 text-center justify-content-center' id='navbar'>
        <Container fluid className='nav'>
          <Navbar.Brand>
            <Image src="/images/logos/HES-OTOMOTIV-LOGO.png" alt="Logo" className={styles.logo} width={90} height={60} />
            <span className={styles.baslik1}><strong >HES OTOMOTİV </strong> </span> {' '}
            <span className={styles.baslik2}><strong >BMW MINI YEDEK PARÇALARI</strong></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={`${styles.navLink} nav-link`}>Anasayfa</Nav.Link>
              <Nav.Link href="#link" className={`${styles.navLink} nav-link`}>Hakkımızda</Nav.Link>
              <Nav.Link href="#link" className={`${styles.navLink} nav-link`}>İletişim</Nav.Link>
              <Nav.Link href="#link" className={`${styles.navLink} nav-link`}>Ürünlerimiz</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ürün Arayın"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Ara</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HNavbar;
