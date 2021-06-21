/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
	{
		name: "All Posts",
		href: "/allposts",
		icon: "/icon/walk.svg",
		text: "Hotel icon",
		current: false,
	},
	{
		name: "Hotel",
		href: "/hotel",
		icon: "/icon/hotel.svg",
		text: "Hotel icon",
		current: false,
	},
	{
		name: "Food",
		href: "/food",
		icon: "/icon/food.svg",
		text: "Plane icon",
		current: false,
	},
	// {
	// 	name: "Day Trips",
	// 	href: "/day-trip",
	// 	icon: "/icon/walk.svg",
	// 	text: "Walking icon",
	// 	current: false,
	// },
	// {
	// 	name: "Airport/Airline",
	// 	href: "/airport",
	// 	icon: "/icon/plane.svg",
	// 	text: "Plane icon",
	// 	current: false,
	// },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Nav({ color }) {
	let col = color ? " text-gray-900" : " text-white";


	return (
		<Disclosure
			as='nav'
			className=' top-0 z-30 mx-auto h-[72px] w-full absolute    blur-lg backdrop-filter backdrop-blur-sm max-w-8xl xl:px-8 firefox:bg-opacity-90 '>
			{({ open }) => (
				<>
					<div className='max-w-8xl  container mx-auto cursor-pointer'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<Link href='/' className='cursor-pointer' passHref>
									<div className='flex-shrink-0 flex items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-11 w-11 md:h-8 md:w-8 md:mr-2 fill-current text-pink-500'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
											/>
										</svg>

										<p
											className={
												"hidden text-lg text-white font-bold leading-relaxed md:inline-block mr-4 py-2 whitespace-nowrap uppercase  " +
												col
											}>
											Meet The Whytes
										</p>
									</div>
								</Link>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex flex-row align-middle justify-center items-center  space-x-4'>
										{navigation.map((item) => (
											<Link href={item.href} key={item.name} passHref>
												<div className="flex flex-row justify-center align-middle items-center">
											
													<button key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? "bg-gray-900 text-white"
															:  "text-white  hover:text-white " + col ,
														"px-2 py-2 rounded-md font-semibold text-base flex flex-row justify-center align-middle items-center"
													)}>
												
													<Image
													className=''
													src={item.icon}
													alt={item.text}
													width={20}
													height={20}
												/>



													<span className="mx-1  hover:text-pink-500">{item.name}</span>
												</button>

											
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>
							{/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                 Profile dropdown 
                
              </div>*/}
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-black hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium bg-green-100"
									)}
									aria-current={item.current ? "page" : undefined}>
									{item.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
