import React from "react";

function Stars({ stars }) {
	return (
		<div className='grid grid-cols-5'>
			{[...Array(stars)].fill().map((_, index) => {
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 fill-current text-pink-500'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
							clipRule='evenodd'
						/>
					</svg>
				);
			})}{" "}
		</div>
	);
}

export default Stars;

// <svg key={index}
// className='mx-0.5 w-6 h-6 fill-current text-pink-500'
// xmlns='http://www.w3.org/2000/svg'
// viewBox='0 0 20 20'>
// <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
// </svg>
