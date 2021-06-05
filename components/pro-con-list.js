import React from "react";

function ProConList({ positives, negatives ,verdict }) {


	return (
		<section className='text-gray-800 body-font'>
		<h1 className=""></h1>
		<h1 className="font-playfair-display text-6xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
		Overview
	  </h1>
			<div className='container px-5 py-6 lg:py-12 mx-auto flex flex-wrap'>
				<div className='flex flex-wrap -m-4'>
					<div className='p-4 lg:w-1/2 md:w-full'>
						<div className='flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
							<div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
								</svg>
							</div>
							<div className='flex-grow'>
								<h2 className='font-playfair-display text-gray-900 text-lg title-font font-medium mb-3'>
									What we loved
								</h2>

								<div className='flex flex-col sm:items-start sm:text-left  items-center -mb-1 space-y-2.5'>
									<ul>
										{positives?.map((positive, index) => (
											<li key={index} className="my-3 leading-relaxed">
												<span className='bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
													<svg
														fill='none'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='3'
														className='w-3 h-3'
														viewBox='0 0 24 24'>
														<path d='M20 6L9 17l-5-5'></path>
													</svg>
												</span>
												{positive}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='p-4 lg:w-1/2 md:w-full'>
						<div className='flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
							<div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 flex-shrink-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' />
								</svg>
							</div>
							<div className='flex-grow'>
								<h2 className='font-playfair-display text-gray-900 text-lg title-font font-medium mb-3'>
									What we didnt like{" "}
								</h2>

								<div className='flex flex-col sm:items-start sm:text-left  items-center -mb-1 space-y-2.5'>
									<ul>
										{negatives?.map((negative, index) => (
											<li key={index} className="my-3 leading-relaxed">
												<span className='bg-gray-100 text-gray-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-3 w-3'
														viewBox='0 0 20 20'
														fill='currentColor'>
														<path
															fillRule='evenodd'
															d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
															clipRule='evenodd'
														/>
													</svg>
												</span>
												{negative}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
		
			<div className='flex border-2 my-12 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
				<div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
						/>
					</svg>
				</div>
				<div className='flex-grow'>
					<h2 className='font-playfair-display text-gray-900 text-lg title-font font-medium mb-3'>
						Verdict
					</h2>

					<div className='flex flex-col sm:items-start sm:text-left leading-relaxed  items-center -mb-1 space-y-2.5'>
						<p className="font-sans">
						{verdict}
						</p>
					</div>
				</div>
			</div>
            </div>

		</section>
	);
}

export default ProConList;
