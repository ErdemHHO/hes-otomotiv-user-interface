'use client';

import { useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdAttachEmail, MdLocationCity } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaWhatsapp,
} from 'react-icons/fa';
import Link from 'next/link';

function index() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div>
				<div className="contact" data-aos="fade-up" data-aos-duration="1000">
					<h1 className="baslik-h1">İletişim</h1>
					<div className="container">
						<div className="section-header text-center"></div>
						<div className="row">
							<div className="col-md-6">
								<div className="contact-info ">
									<div className="contact-item">
										<MdLocationCity size={60} className="contact-icon" />
										<div className="contact-text">
											<h2>Adres</h2>
											<Link
												href="https://goo.gl/maps/zNPYF3LyxESozKND9"
												className="link"
												target="_blank"
											>
												<p>
													Gümrükçüler San. Sit. A Blok No:26 Ümraniye / İstanbul
												</p>
											</Link>
										</div>
									</div>
									<div className="contact-item">
										<BsFillTelephoneFill size={60} className="contact-icon" />
										<div className="contact-text">
											<h2>Telefon</h2>
											<Link
												href="tel:+905322409058"
												className="link"
												target="_blank"
											>
												<p>+ 90 216 630 16 16</p>
											</Link>
										</div>
									</div>
									<div className="contact-item">
										<MdAttachEmail size={60} className="contact-icon" />
										<div className="contact-text">
											<h2>Email</h2>
											<Link
												href="mailto:hesotomotiv34@gmail.com?subject=%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
												target="_blank"
											>
												<p>hesotomotiv34@gmail.com</p>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="contact-info">
									<div className="contact-item">
										<FaInstagramSquare size={60} className="contact-icon" />
										<div className="contact-text">
											<h2>Instagram</h2>
											<Link
												href="https://www.instagram.com/hesotomotiv34/"
												target="_blank"
											>
												<p>hesotomotiv34</p>
											</Link>
										</div>
									</div>
									<div className="contact-item">
										<FaFacebookSquare size={60} className="contact-icon" />
										<div className="contact-text">
											<h2>Facebook</h2>
											<Link
												href="https://www.facebook.com/hesotomotiv34/"
												target="_blank"
											>
												<p>hesotomotiv34</p>
											</Link>
										</div>
									</div>
									<div className="contact-item">
										<FaWhatsapp size={60} className="contact-icon" />
										<div className="contact-text">
											<h2>Whatsapp</h2>
											<Link
												href="https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0"
												target="_blank"
											>
												<p>+90 532 240 90 58</p>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<iframe
				className="p-5"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.119590958423!2d29.114788375828766!3d41.02263947134845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac95a715f19db%3A0x7b4fbd39a1f28f70!2sHES%20OTOMOT%C4%B0V%20-%20BMW%20M%C4%B0N%C4%B0%20OTO%20YEDEK%20PAR%C3%87ALARI!5e0!3m2!1str!2str!4v1689276296091!5m2!1str!2str"
				width="100%"
				height="450"
				allowFullScreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}

export default index;
