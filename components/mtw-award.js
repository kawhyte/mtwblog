import React from "react";
import Date from "../components/date";

function MtwAward({ address, date }) {
	return (
		<div>
			<span className='flex flex-row-reverse justify-center items-center px-3 ml-6  md:mx-3 my-4 z-20  text-base rounded-lg   bg-pink-500 shadow-lg absolute '>
				<p className='text-white bg-pink-500 font-medium text-sm md:text-base p-1  '>
					<span className='mr-1'>
						{" "}
						{address ? address : "No address provided"}{" "}
					</span>
					| <span className='ml-1'></span> Visited <Date dateString={date} />
				</p>

			</span>
		</div>
	);
}

export default MtwAward;
