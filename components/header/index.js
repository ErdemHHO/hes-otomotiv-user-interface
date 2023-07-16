
import { FaPhoneAlt, FaMailBulk ,FaMapMarkedAlt,FaInstagram,FaFacebook,FaWhatsapp} from 'react-icons/fa'; 

import styles from "./styles.module.css";

import Link from 'next/link'


function Header() {
  return (
    <header className={`${styles.header} header p-1 text-white `}>
        <div className="container d-none d-xl-flex justify-content-between ">

                <div>
                    <div className="d-flex">
                        <img src="/images/brands/bmw.png" alt="HES-OTOMOTIV" className={styles.logo2} height={60} width={65} />
                        <img src="/images/brands/mini.png" alt="HES-OTOMOTIV" className={styles.logo2} height={60} width={154} />
                    </div>
                </div>
                <div className="d-flex justify-content-between" >
                    <div className='d-flex justify-content-between mx-3' >
                        <div>
                            <FaPhoneAlt className={styles.icon} />
                        </div>
                        <div className='m-2' >
                            <span className={styles.text}>
                                <strong>
                                    <Link href="tel:+905322409058" className='link' target="_blank" >+ 90 532 240 90 58</Link>
                                </strong>
                                </span>
                                <br />
                                <span className={`${styles.text} ${styles.textTel}`}>
                                <strong>
                                    <Link href="tel:+902166301616" className='link' target="_blank">0 (216) 630 16 16</Link>
                                </strong>
                            </span>
                        </div>  
                    </div>
                    <div className='d-flex justify-content-between mx-3'>
                        <Link href="https://goo.gl/maps/7noGMW1iSryeCF9u6" className='link' target="_blank">
                            <div className="d-flex">
                                <div>
                                    <FaMapMarkedAlt className={styles.icon} />
                                </div>
                                <div className='m-2'>
                                    <span className={styles.text}> Gümrükçüler Sanayi Sitesi <br /> A Blok No:26 Ümraniye / İstanbul</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-between mx-3'>
                        <Link href="mailto:hesotomotiv34@gmail.com?subject=%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." className='link' target="_blank">
                            <div className="d-flex">
                                <div>
                                    <FaMailBulk className={styles.icon} /> 
                                </div>
                                <div className='m-2'>
                                    <span className={styles.text} >hesotomotiv34@gmail.com</span>
                                </div>    
                            </div>
                        </Link>                    
                    </div>                    
                </div>

                
        </div>
        <div className="container d-flex d-xl-none justify-content-between">
            <div>
                <div className="d-flex">
                    <img src="/images/brands/bmw.png" alt="HES-OTOMOTIV" className={styles.logo2} height={50} width={50} />
                    <img src="/images/brands/mini.png" alt="HES-OTOMOTIV" className={styles.logo2} height={50} width={95} />
                </div>
            </div>
            <div className="d-flex mt-2">
                <Link href="https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank" >
                    <div>
                        <FaWhatsapp className={styles.icon2} />
                    </div>
                </Link>
                <Link href="https://www.facebook.com/hesotomotiv34/" target="_blank" >
                    <div>
                        <FaFacebook className={styles.icon2} /> 
                    </div>
                </Link>
                <Link href="https://www.instagram.com/hesotomotiv34/" target="_blank" >
                    <div>
                        <FaInstagram className={styles.icon2} /> 
                    </div>  
                </Link>
            </div>

        </div>
    </header>
  )
}

export default Header