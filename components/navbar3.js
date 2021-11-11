import React from "react";
import Link from "next/link";

function Navbar({ fixed, color }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
 let col = color ? ' text-white': ' text-white'

	return (
		<div className='top-0 z-50 bg-whit absolute left-0 right-0 '>
			<nav className={'relative flex flex-wrap items-center justify-between  px-2 py-3  mb-3 '  }>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/' className='cursor-pointer' passHref>
							<div className='flex flex-row justify-center align-middle items-center cursor-pointer'>
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

								<p className={'hidden  text-lg font-semibold leading-relaxed md:inline-block mr-4 py-2 whitespace-nowrap uppercase  ' + col  }>
									Meet The Whytes
								</p>
							</div>
						</Link>

						<button
							className={'cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none '  + col  }
							type='button'
							aria-label= "Justify"
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
					<div
						className={
							" mt-2 z-20  bg-white lg:flex flex-grow " +
							(navbarOpen ? " flex items-center justify-start  " : " hidden")
						}
						id='example-navbar-danger'>
						<ul className='flex flex-col align-middle justify-start items-center lg:flex-row list-none lg:ml-auto '>
							<li className='nav-item'>
								<a
									className={'px-3 py-2 flex items-left text-xs uppercase font-bold leading-snug hover:opacity-75  ' +  col   }
									href=''>
									<span className='text-base text-black'>Home</span>
								</a>
							</li>
							<li className='nav-item'>
								<Link href='/allposts'>
									<a
										className={'px-3 py-2 flex items-left text-xs uppercase font-bold leading-snug hover:opacity-75 '  + col  }
										href=''>
										<span className=' text-base text-black'>All Posts</span>
									</a>
								</Link>
							</li>

							
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
