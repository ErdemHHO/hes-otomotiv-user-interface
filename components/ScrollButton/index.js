'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 100 && window.innerWidth > 576) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div
			className={`position-fixed ${isVisible ? 'visible' : 'invisible'}`}
			style={{ right: '15px', bottom: '15px' }}
		>
			<button
				onClick={scrollToTop}
				className="btn btn-warning p-2 rounded-circle"
			>
				<AiOutlineArrowUp size={30} />
			</button>
		</div>
	);
};

export default ScrollButton;
