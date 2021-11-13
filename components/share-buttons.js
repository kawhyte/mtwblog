import React from "react";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";

import {
	FaTwitter,
	FaLinkedin,
	FaFacebook,
	FaEnvelopeOpenText,
	
} from "react-icons/fa";

const iconCSS = "text-pink-500 h-8 w-7 hover:text-blue-600 fill-current";
const buttonCSS = "mr-5 bg-red-200 p-10 ";
function shareButtons({ shareURL }) {
	return (
		<div className='flex flex-col my-6 mx-6   '>

			<div className='  mx-4  flex align-middle justify-center md:justify-start'>
				<TwitterShareButton url={shareURL} className={buttonCSS}>
					<FaTwitter className={iconCSS} />
				</TwitterShareButton>
				<LinkedinShareButton url={shareURL} className={buttonCSS}>
					<FaLinkedin className={iconCSS} />
				</LinkedinShareButton>
				<FacebookShareButton url={shareURL} className={buttonCSS}>
					<FaFacebook className={iconCSS} />
				</FacebookShareButton>

				<EmailShareButton url={shareURL} className={buttonCSS}>
					<FaEnvelopeOpenText className={iconCSS} />
				</EmailShareButton>
			</div>
		</div>
	);
}

export default shareButtons;
