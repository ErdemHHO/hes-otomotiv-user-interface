'use client'

import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import NavbarSearchInput from '../navbarSearchInput';

function HNavbar() {
	return (
		<div className={styles.navbar}>
			<nav className="navbar navbar-expand-lg px-5">
				<div className="container-fluid">
					<Link className="navbar-brand" href="/">
						<Image
							src="/images/logos/HES-OTOMOTIV-LOGO.png"
							alt="Logo"
							className={styles.logo}
							width={90}
							height={60}
						/>
						<span className={styles.baslik1}>
							<strong>HES OTOMOTİV</strong>{' '}
						</span>{' '}
						<span className={styles.baslik2}>
							<strong>BMW MINI YEDEK PARÇALARI</strong>
						</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
                <Link href="/">
                  <span className={`${styles.navLink} nav-link`}>Anasayfa</span>
                </Link>
							</li>
							<li className="nav-item">
                <Link href="/hakkimizda">
                  <span className={`${styles.navLink} nav-link`}>Hakkımızda</span>
                </Link>
							</li>
							<li className="nav-item">
              <Link href="/iletisim">
								<span className={`${styles.navLink} nav-link`}>İletişim</span>
							</Link>
							</li>
              <li className="nav-item">
              <Link href="/urunler">
								<span className={`${styles.navLink} nav-link`}>
									Ürünlerimiz
								</span>
							</Link>
							</li>
						</ul>
						<NavbarSearchInput />
					</div>
				</div>
			</nav>
		</div>
	);
}

export default HNavbar;
