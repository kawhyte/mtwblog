import Avatar from "../components/avatar";
import Date from "../components/date";
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
	slug,
}) {
	return (
		<section className='mt-20'>
		<h2 className="font-playfair-display mb-5 sm:mb-12 text-2xl md:text-3xl  font-medium tracking-tight leading-tight">
		Featured Review
		</h2>

			<div className='flex flex-col justify-start items-center'>
				<div className=' relative'>
					<MtwAward />

					<div className='absolute bottom-0 right-0 mx-2 my-1 flex flex-col justify-start items-start align-middle '>
					<p className="bg-pink-500 text-left text-white break-all pl-4 pr-8 py-1 ">{address}</p>
						<h3 className='mb-2 md:mb-6 text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-white px-3 py-2'>
							
						
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a className='hover:underline break-all font-playfair-display'>{title}</a>
							</Link>
						</h3>
					</div>
					<CoverImage
						slug={slug}
						imageObject={coverImage}
						title={title}
						url={coverImage}
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
