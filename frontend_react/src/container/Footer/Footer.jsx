import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
	return (
		<>
			<h2 className='head-text'>Contact Me</h2>
			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt='email' />
					<a href='mailto:federicolucaspontoriero@gmail.com' className='p-text'>
						federicolucaspontoriero@gmail.com
					</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.mobile} alt='mobile' />
					<a href='tel: 54 (1131433409)' className='p-text'>
						(54) 1131433409
					</a>
				</div>
			</div>

			<div className='app__footer-form app__flex'>
				<div className='app__flex'>
					<input
						type='text'
						className='p-text'
						placeholder='Your Name'
						value={name}
						onChange={handleChangeInput}
						name='name'
					/>
				</div>
				<div className='app__flex'>
					<input
						type='email'
						className='p-text'
						placeholder='Your Email'
						value={email}
						onChange={handleChangeInput}
						name='email'
					/>
				</div>

				<div>
					<textarea
						className='p-text'
						placeholder='Your Message'
						value={message}
						name={message}
						onChange={handleInputChange}></textarea>
				</div>
				<button type='button' className='p-text' onClick={handleSubmit}>
					Send Message
				</button>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
