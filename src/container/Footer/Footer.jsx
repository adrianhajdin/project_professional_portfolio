import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>
      {!isFormSubmitted ? (
				<form className='app__footer-form app__flex'>
					<div className='app__flex'>
						<input
							className='p-text'
							name='name'
							type='text'
							placeholder='Your name'
							value={name}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className='app__flex'>
						<input
							className={`${danger ? 'danger' : 'p-text'}`}
							name='email'
							type='email'
							placeholder='Your email'
							value={email}
							onChange={handleChangeInput}
							required
						/>
						{emailError && danger && (
							<div className='app__flex'>
								<p className='text-danger'>{emailError}</p>
							</div>
						)}
					</div>
					<div>
						<textarea
							name='message'
							value={message}
							onChange={handleChangeInput}
							placeholder='Your Message'
							className='p-text'
							required
						/>
					</div>

					<button type='submit' className='p-text' onClick={handleSubmit}>
						{!loading ? 'Send Message' : 'Sending...'}
					</button>
				</form>
			) : (
				<h3 className='thankyou'>Thankyou for getting in touch</h3>
			)}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
