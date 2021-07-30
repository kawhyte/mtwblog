import Container from "./container";
import Link from "next/link";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className='text-gray-600 body-font bg-gray-50'>
			<Container>
				<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
					<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
						<Link href='/' passHref>
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

								<p className='hidden text-base font-bold leading-relaxed md:inline-block mr-4 py-2 whitespace-nowrap uppercase text-black'>
									Meet The Whytes
								</p>
							</div>
						</Link>
						<span className='ml-3 text-xl'>MTW</span>
					</a>
					<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
						© 2021 MTW — Created by
						<a
							href='https://www.kennywhyte.com'
							className='text-green-800 ml-1 bg-white'
							rel='noopener noreferrer'
							target='_blank'>
							Kenny 
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer'>


						<a className='ml-3 text-pink-500' rel="noopener noreferrer nofollow" 
                        target="_blank" href='https://www.instagram.com/thepixelprince/?hl=en'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-8 h-8'
								viewBox='0 0 24 24'>
								<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						<a className='ml-3 text-pink-500' rel='noopener noreferrer nofollow'
						target='_blank'
						href='https://www.youtube.com/channel/UC519Rsb02cRpbzDNLMWflVA'>
							<svg xmlns="http://www.w3.org/2000/svg" fill='currentColor'
							stroke='currentColor' width="24" height="24" className='w-8 h-8' viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
						</a>
					</span>
				</div>
			</Container>
		</footer>
	);
}
