import React from "react";
import Date from "../components/date";

function MtwAward({ address, date }) {
	return (
		<div>
			<span className='flex flex-row-reverse justify-center items-center px-3 ml-6  md:mx-3 my-4 z-20  text-base rounded-lg  text-white  bg-pink-500 shadow-lg absolute '>
				<p className='text-white font-normal text-xs md:text-sm p-1  '>
					<span className='mr-1'>
						{" "}
						{address ? address : "No address provided"}{" "}
					</span>
					| <span className='ml-1'></span> Visited <Date dateString={date} />
				</p>

				{/*<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-4 w-4 sm:h-5 sm:w-5 text-white'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
					/>
				</svg>*/}
			</span>
		</div>
	);
}

export default MtwAward;
