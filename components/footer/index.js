
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiSahibinden } from 'react-icons/si';

import styles from "./styles.module.css";
import Link from 'next/link'

function Footer() {
  return (
  <div className={styles.footerContainer}>
    <div className={`${styles.bgFooter}  ${styles.bgFooter} text-center p-5 text-white footer mt-5`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img src="/images/logos/HES-OTOMOTIV-LOGO1-1.svg" alt="HES-OTOMOTIV-LOGO" className={styles.logoFooter} width={150} height={150} />
              </div>
              <div className="col-md-8">
                <h4 className={styles.baslik1}><strong>HES OTOMOTİV</strong></h4>
                <h5 className={styles.baslik2}><strong>BMW MINI COOPER YEDEK PARÇALARI</strong> </h5>
                <div className={styles.textPrimary}>
                  <Link href="https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank" >
                    <FaWhatsapp size={32} className={`${styles.icon} ${styles.whatsapp}`} /> {'   '}
                  </Link>
                  <Link href="https://www.facebook.com/hesotomotiv34/"  target="_blank" >
                    <FaFacebookF size={32} className={`${styles.icon} ${styles.facebook}`} /> {'   '}
                  </Link>
                  <Link href="https://www.instagram.com/hesotomotiv34/"   target="_blank" >
                    <FaInstagram size={32} className={`${styles.icon} ${styles.instagram}`} /> {'   '}
                  </Link>
                  <Link href="https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank" >
                    <SiSahibinden size={32} className={`${styles.icon} ${styles.sahibinden}`} />
                  </Link> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className='border-bottom border-white' >Kurumsal</h4>
            <ul>
              <li>
                <Link href="/hakkimizda" className='link'>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className='link'>
                İletişim
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className='link'>
                  Vizyon
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className='border-bottom border-white'>TESLİMAT & İADE</h4>
            <ul>
              <li>
                <Link href="/teslimat" className='link'>
                  Teslimat Bilgileri
                </Link>
              </li>
              <li>
                <Link href="/teslimat" className='link' >
                  İade & Değişim
                </Link>
              </li>
              <li>
                <Link href="/teslimat" className='link' >
                  Mesafeli Satış Sözleşmesi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      Designed By | 
      
        <span >
          <Link href={`https://github.com/ErdemHHO`} className={`${styles.designedBy} m-1`} target="_blank" >
            Erdem Hacıhasanoğlu
          </Link>
        </span>
    </div>
  </div>

  )
}

export default Footer;
