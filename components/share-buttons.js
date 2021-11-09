import React from "react";
import {
	EmailShareButton,
	EmailIcon,
	FacebookShareButton,
	FacebookIcon,
	PinterestShareButton,
	PinterestIcon,
	TwitterShareButton,
	TwitterIcon,
} from "react-share";

function shareButtons({ shareURL }) {
	return (
		<div className='flex flex-row  '>
			<FacebookShareButton url={shareURL} className='mx-4'>
				<FacebookIcon round size={40}></FacebookIcon>
			</FacebookShareButton>

			<TwitterShareButton url={shareURL} className='mx-4'>
				<TwitterIcon round size={40}></TwitterIcon>
			</TwitterShareButton>

			<EmailShareButton url={shareURL} className='mx-4'>
				<EmailIcon round size={40}></EmailIcon>
			</EmailShareButton>
		</div>
	);
}

export default shareButtons;
