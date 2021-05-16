import React from "react";

function Welcome() {
	return (
		<div className='bg-yellow-50'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-12 my-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h2 className='mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight'>
							Hi! Welcome, to our space on the{" "}
							<span className='text-pink-500'>interwebs </span>
						</h2>

						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							We are the Whytes. We're a Husband 👖 and wife 👗 duo.We love to travel & Eat new
							food
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Welcome;
