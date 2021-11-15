import React from "react";

function ProgressRating({ progress }) {
	
	
	let progressPercentage = (Math.floor(progress) / 5) * 100;

	return (
		<>
			<div className='h-1 w-full bg-gray-300 '>
				<div
					style={{ width: `${progressPercentage}%` }}
					className={`h-full  ${
						progressPercentage < 50 ? "bg-red-600" : "bg-green-600"
					}`}></div>
			</div>
			<span className='text-sm ml-3 '>{progress} </span>
		</>
	);
}

export default ProgressRating;
