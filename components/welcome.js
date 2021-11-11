import React from "react";


function Welcome() {
	return (
		<div className=''>
			<section className='text-gray-600 body-font '>
				<div className='container px-5 py-2 md:py-6 mx-auto'>
					<div className=' flex flex-col py-12 text-center w-full '>
					
						<h2 className='mb-2 font-fancy  text-4xl md:text-6xl font-bold tracking-tighter leading-tight'>
							Hi! We are the Whytes. <br></br> Welcome to our space on the{" "}
							<span className='text-pink-500'>interwebs </span>
						</h2>

						<p className='lg:w-2/3  mx-auto leading-relaxed text-2xl'>
						We&apos;re a Husband 👖 and wife 👗 duo. We love to travel & try new food.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Welcome;
