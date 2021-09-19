import React from "react";
import Link from "next/link";
import Image from "next/image";

const category = [
	{
		name: "All",
		href: "/allposts",
		image:
			"https://res.cloudinary.com/babyhulk/image/upload/v1621897765/project/PXL_20210222_215622925.MP.webp",
		text: "Hotel icon",
		alt: "View of Sunset at a hotel",
	},
	{
		name: "Hotel",
		href: "/hotel",
		image:
			"https://res.cloudinary.com/babyhulk/image/upload/v1621896780/project/PXL_20210428_025517322.MP.webp",
		text: "Hotel icon",
		alt: "View of Sunset at a hotel",
	},

	{
		name: "Food",
		href: "/food",
		image:
			"https://res.cloudinary.com/babyhulk/image/upload/v1621897187/project/MVIMG_20191203_091517.webp",
		text: "Hotel icon",
		alt: "View of Food",
	},
	// {
	// 	name: "Day Trips",
	// 	href: "/day-trip",
	// 	image: "https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897765/project/PXL_20210222_215622925.MP.webp",
	// 	text: "Hotel icon",
	//   alt:"View of Mountains with snow"

	// },
	// {
	// 	name: "Airport/Airline Reviews",
	// 	href: "/airport",
	// 	image: "https://res.cloudinary.com/babyhulk/image/upload/c_scale,w_238/v1621897965/project/IMG_20180904_001734.webp",
	// 	text: "Hotel icon",
	//   alt: "View of an Airport"

	// }
];

function Categories() {
	return (
		<>
			<section className='text-gray-600  mt-2 '>
				<div className='container px-5 py-10 mx-auto '>
					<div className='flex flex-wrap w-full mb-10'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
							<h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Browse Reviews
							</h1>
							<div className='h-1 w-20 bg-pink-500 rounded'></div>
						</div>
					</div>

					<div className='   '>
						<div className='grid  grid-cols-3 md:grid-cols-3 gap-5  place-items-center lg:grid-cols-3 relative  '>
							{category.map((item) => (
								<div key={item.href}>
									<div className='relative group rounded-xl overflow-hidden hidden md:block'>
										<Link
											key={item.name}
											href={item.href}
											className='relative cursor-pointer'
											passHref>
											<Image
												height={286}
												width={286}
												blurDataURL={item.image}
												placeholder='blur'
												className='h-40 cursor-pointer rounded-xl w-full  object-cover object-center mb-6'
												src={item.image}
												alt={item.text}
											/>
										</Link>
									</div>
									<div className='relative group rounded-xl overflow-hidden  md:hidden'>
										<Link
											key={item.name}
											href={item.href}
											className='relative cursor-pointer'
											passHref>
											<Image
												height={196}
												width={196}
												blurDataURL={item.image}
												placeholder='blur'
												className='h-40 cursor-pointer rounded-xl w-full  object-cover object-center mb-6'
												src={item.image}
												alt={item.text}
											/>
										</Link>
									</div>

									<Link
										key={item.name}
										href={item.href}
										className='relative cursor-pointer'
										passHref>
										<p className='  text-gray-700 text-xl cursor-pointer '>
											{item.name}
										</p>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Categories;
//  <h2 className=" font-fancy text-lg text-gray-900 font-medium title-font mb-4">{item.name}</h2>
// <svg fill="#ffffff " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="none"><path d="M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"></path></svg>
