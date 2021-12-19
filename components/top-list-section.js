import React from "react";

function top({ posts }) {
	console.log(posts);
	return (
		<div>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Our Top Picks 
							</h1>
							<div className='h-1 w-20 bg-pink-500 rounded'></div>
						</div>
						<p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven heard of them man bun deep jianbing selfies heirloom prism
							food truck ugh squid celiac humblebrag.
						</p>
					</div>

					{posts.map((item) => (
						<div key={item._id} className='flex flex-wrap -m-4'>
							<div className='xl:w-1/4 md:w-1/2 p-4'>
								<div className='bg-gray-100 p-6 rounded-lg'>
									<img
										className='h-40 rounded w-full object-cover object-center mb-6'
										src='https://dummyimage.com/720x400'
										alt='content'
									/>
									<h3 className='tracking-widest text-pink-500 text-xs font-medium title-font uppercase'>
										{item.linkType}
									</h3>
									<h3 className='tracking-widest text-pink-500 text-xs font-medium title-font'>
										{item.address}
									</h3>
									<h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
										{item.title}
									</h2>
									<p className='leading-relaxed text-base'>{item.verdict}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default top;
