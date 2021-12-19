import Section from "../components/section";
import StorySection from "../components/story-section";
import Welcome from "../components/welcome";
import HeroPost from "../components/hero-post";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllStoriesForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Categories from "../components/categories";
import Container from "../components/container";
import Image from "next/image";


export default function Index({ allPosts, allStories, preview }) {
	const mergedArray = [...allPosts, ...allStories];

	//  console.log(" ALL Posts ", allPosts)

	// .sort(function(a,b){

	// 	return new Date(b.date) - new Date(a.date);""
	//   });
	const heroPost = mergedArray[0];
	const morePosts = allPosts.slice(1, 7);
	const moreStories = allStories.slice(0, 7);

	return (
		<>
			<Layout preview={preview} color={true} bgColor={false}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>

				<Hero />
				<Welcome />
				<Categories />
				<Container>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							//author={heroPost.author}
							address={heroPost.address}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					<div className='bg-green-50 rounded-3xl py-8 relative  '>

					
			

						{morePosts.length > 0 ? (
							<div className='mx-4 flex flex-col md:flex-row  justify-between  w-full mb-10'>
								<div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
									<h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
										Recent Reviews
									</h1>
									<div className='h-1 w-20 bg-pink-500 rounded'></div>
								</div>

								<div className='mx-24 md:mx-8'>
									<Link href='/allreviews' passHref>
										<div
											aria-label='Justify'
											type='button'
											className='py-2 px-4 cursor-pointer bg-pink-500   hover:bg-pink-600 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  md:w-full transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
											All Reviews
										</div>
									</Link>
								</div>
							</div>
						) : (
							""
						)}
						{morePosts.length > 0 && <Section   posts={morePosts} />}
						{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					
					</div>

					<div className=' bg-yellow-50 rounded-3xl py-8 my-10 relative '>
					<div className='absolute bottom-0 right-0 z-0   '>
					<Image
						width={795}
						height={772}
						alt={`Cover Image for passport`}
						className='opacity-5  z-0  '
						src='/passport.svg'
					/>
				</div>




						{moreStories.length > 0 ? (
							<div className='mx-4 flex flex-col md:flex-row  justify-between  w-full mb-10 '>
								<div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
									<h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
										Recent Stories & Guides
									</h1>
									<div className='h-1 w-20 bg-pink-500 rounded'></div>
								</div>

								<div className='mx-24 md:mx-8 z-50'>
									<Link href='/story' passHref>
										<div
											aria-label='Justify'
											type='button'
											className='py-2 px-4 cursor-pointer bg-pink-500   hover:bg-pink-600 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  md:w-full transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
											All Stories & Guides
										</div>
									</Link>
								</div>
							</div>
						) : (
							""
						)}
						{moreStories.length > 0 && <StorySection stories={moreStories} />}
						{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					</div>
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	const allStories = await getAllStoriesForHome(preview);
	return {
		props: { allPosts, allStories, preview },
		revalidate: 100,
	};
}
