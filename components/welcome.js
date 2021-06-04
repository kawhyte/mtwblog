import React from "react";

// #3aa141
function Welcome() {
	return (
		<div className='bg-indigo-50 pattern'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-2 md:py-12 mb-12 mx-auto'>
					<div className='font-playfair-display flex flex-col py-24 text-center w-full mb-10'>
						<h2 className='mb-8  text-4xl md:text-6xl font-bold tracking-tighter leading-tight'>
							Hi! We are the Whytes. <br></br> Welcome to our space on the{" "}
							<span className='text-pink-500'>interwebs </span>
						</h2>

						<p className='lg:w-2/3 mx-auto leading-relaxed text-2xl'>
							We're a Husband 👖 and wife 👗 duo.We love to travel & try new
							food.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Welcome;
