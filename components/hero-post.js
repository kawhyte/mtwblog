import CoverImage from "../components/cover-image";
import Link from "next/link";
import MtwAward from "./mtw-award";

export default function HeroPost({
	title,
	coverImage,
	date,
	address,
	excerpt,
	author,
	linkType,
	slug,
}) {

	//console.log("LinkTypee",linkType)

	const slugType= linkType==="hotel" || linkType==="food" ? "posts": "stories"

//console.log("slugType",slugType	)
	
	return (
		<section className='mt-20  '>
			<div className=' container mx-auto flex flex-wrap w-full mb-10'>
				<div className='lg:w-1/2 w-full mb-6 lg:mb-0 mx-4 '>
					<h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
						Latest Article
					</h1>
					<div className='h-1 w-20 bg-pink-500 rounded'></div>
				</div>
			</div>

			<div className='flex flex-col justify-start items-center '>
				<div className=' relative '>
					<MtwAward address={address} date={date} />

					<div className='absolute bottom-0 right-0  mx-6 -my-8 flex flex-col justify-start items-start align-middle '>
						<p className='mb-2 z-20 md:mb-6 text-lg sm:text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-white px-3 py-2 mx-3 md:mx-0 rounded-lg'>
						
							<Link as={`/${slugType}/${slug}`} href={`/${slugType}/[slug]`}>
								<a className='hover:underline break-words'>
									{title}
								</a>
							</Link>
						</p>
					</div>
					<CoverImage
						slug={slug}
						imageObject={coverImage}
						title={title}
						url={coverImage}
						linkType={linkType}
					/>
				</div>
				<div className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-16 md:mb-12 '>
					<div>
						<p className='text-lg leading-relaxed mb-2'>{excerpt}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
