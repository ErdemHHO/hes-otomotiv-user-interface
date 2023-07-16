import React from 'react'
import Image from 'next/image'

function NotFound() {
  return (
    <div className='error'>
        <div className='d-flex justify-content-center text-center m-3' >
            <Image src="/images/logos/HES-OTOMOTIV-LOGO.png" alt="Logo" width={170} height={120} />
        </div>
        <div className='d-flex justify-content-center text-center' >
            <h2 className='fw-1'>SAYFA BULUNAMADI</h2>
        </div>
    </div>
  )
}

export default NotFound