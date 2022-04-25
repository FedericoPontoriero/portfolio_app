import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';

function SocialMedia() {
	return (
		<div className='app__social'>
			<div>
				<FiGithub href='https://github.com/FedericoPontoriero' />
			</div>
			<div>
				<BsLinkedin href='https://www.linkedin.com/in/federico-pontoriero-924050219/' />
			</div>
		</div>
	);
}

export default SocialMedia;
