import Container from "./container";
import Link from "next/link";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className='text-gray-600 body-font bg-gray-50'>
			<Container>
				<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
					<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
						<Link href='/'>
							<div className='flex flex-row justify-center align-middle items-center'>
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

								<a className='hidden text-base font-bold leading-relaxed md:inline-block mr-4 py-2 whitespace-nowrap uppercase text-black'>
									Meet The Whytes
								</a>
							</div>
						</Link>
						<span className='ml-3 text-xl'>MTW</span>
					</a>
					<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
						© 2021 MTW —
						<a
							href='https://www.kennywhyte.com'
							className='text-gray-500 ml-1'
							rel='noopener noreferrer'
							target='_blank'>
							kennywhyte.com
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer'>


						<a className='ml-3 text-pink-500'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						<a className='ml-3 text-pink-500'>
							<svg
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
								<circle cx='4' cy='4' r='2' stroke='none'></circle>
							</svg>
						</a>
					</span>
				</div>
			</Container>
		</footer>
	);
}
