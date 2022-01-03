import Section from "../components/section";
import StorySection from "../components/story-section";
import Welcome from "../components/welcome";
import HeroPost from "../components/hero-post";
import Hero from "../components/hero";
import Layout from "../components/layout";
import {
	getAllPostsForHome,
	getAllStoriesForHome,
	getAllPostsForTop,
} from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Categories from "../components/categories";
import Container from "../components/container";
import Image from "next/image";
import IndexSection from "../components/index-section";

export default function Index({ allPosts, allStories, allTopPosts, preview }) {
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

					<IndexSection morePosts={morePosts} sectionBgColor='bg-green-50' />

					<div className='bg-white md:my-20 dark:bg-gray-800 overflow-hidden relative flex-col'>
						<div className='text-start w-full lg:w-1/2  py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
							<h2 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>
								<span className='block font-fancy'>
									Check out our top{" "}
									<span className='font-fancy text-yellow-500'>
										Hotels and Restaurants
									</span>{" "}
									recommendations.
								</span>
							</h2>
							<p className='text-xl mt-4 text-gray-600'>
								Our very own curated list of places you should consider
								visiting.
							</p>
							<div className='lg:mt-0 lg:flex-shrink-0'>
								<div className='mt-12 inline-flex rounded-md shadow '>
									<Link href='/top_picks' passHref>
										<button
											type='button'
											className='py-4 px-6  bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
											Top Picks
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div className='absolute h-full max-w-1/2 hidden  lg:block right-0 top-0'>
							<Image
								src='/passport.svg'
								width={496}
								height={355}
								alt='Passport Image'
								blurDataURL='/passport.svg'
								placeholder='blur'
							/>
						</div>
					</div>
					<IndexSection morePosts={moreStories} sectionBgColor='bg-yellow-50' />

				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	const allStories = await getAllStoriesForHome(preview);
	const allTopPosts = await getAllPostsForTop(preview);
	return {
		props: { allPosts, allStories, allTopPosts, preview },
		revalidate: 100,
	};
}
