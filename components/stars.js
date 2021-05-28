import React from "react";

function Stars({ stars, isFraction }) {

	let halfstar= 1
	//  console.log("isFraction IN", isFraction)
	return (
		<div className='grid grid-cols-5 '>
			{[...Array(5)].map((star, index) => {
				if (star !== null && Math.floor(stars)) {
					stars--;
					return (
						<svg
						key={index}
							className='h-6 w-6 ml-1.5 fill-current text-pink-500'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='3 3 18 18'
							aria-hidden='true'
							focusable='false'>
							<path d='M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z'></path>
						</svg>
					);
				} else {
					if (stars === 0 && isFraction && halfstar > 0) {
						halfstar--
						return (
							<svg key={index} className='h-6 w-6 ml-1.5 fill-current text-pink-500' xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M21.11,10c-.13-.42-.15-.46-.28-.88l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52C3,9.57,3,9.61,2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14ZM12.9,15.79l-.9-.53V6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3Z"></path></svg>
						);
					} else {
						return (
							<svg key={index} className='h-6 w-6 ml-1.5 fill-current text-gray-200' xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z"></path></svg>
						);
					}
				}
			})}
		</div>
	);
}

export default Stars;
