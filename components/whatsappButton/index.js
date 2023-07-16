import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

import Link from 'next/link';

import styles from "./styles.module.css";

function WhatsappButton() {
  return (
    <Link href="https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0" target="_blank" >
        <div className={`${styles.whatsappButton} d-none d-md-flex justify-content-between `}>
            <div className='d-flex justify-content-between' >
                <div> 
                    <FaWhatsapp  className={styles.whatsappButtonIcon}/>
                </div>
                <div className={styles.whatsappButtonText} > 
                    Whatsapp İle İletişim
                </div>   
            </div>
        </div>
    </Link>
  )
}

export default WhatsappButton