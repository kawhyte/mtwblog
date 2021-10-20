import Container from "../components/container";
import Section from "../components/section";
import StorySection from "../components/story-section";
import Welcome from "../components/welcome";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Hero from "../components/hero";
import Info from "../components/info-section";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllStoriesForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Categories from "../components/categories";
import Navbar from "../components/navbar";

export default function Index({ allPosts, allStories, preview }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1, 7);
	const moreStories = allStories.slice(0, 7);

	console.log("ALL allStories ", allStories)
	console.log("ALL moreStories ", moreStories)

	return (
		<>
			<Layout preview={preview} color={false} bgColor={false}>
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
					{morePosts.length > 0 ? (
					
						<div className='flex flex-wrap w-full mb-10'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
							<h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
							More Reviews
							</h1>
							<div className='h-1 w-20 bg-pink-500 rounded'></div>
						</div>
					</div>
					) : (
						""
					)}
					{morePosts.length > 0 && <Section posts={morePosts} />}
					{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					<div className=' mx-auto container my-12 max-w-xs'>
						<Link href='/allposts' passHref>
							<button
								aria-label='Justify'
								type='button'
								className='py-2 px-4 bg-pink-500 hover:bg-pink-600 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
								All Hotel & Food Reviews
							</button>
						</Link>
					</div>{" "}

					{moreStories.length > 0 ? (
					
						<div className='flex flex-wrap w-full mb-10'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
							<h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
							More Stories
							</h1>
							<div className='h-1 w-20 bg-pink-500 rounded'></div>
						</div>
					</div>
					) : (
						""
					)}
					{moreStories.length > 0 && <StorySection stories={moreStories} />}
					{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					<div className=' mx-auto container my-12 max-w-xs'>
						<Link href='/allposts' passHref>
							<button
								aria-label='Justify'
								type='button'
								className='py-2 px-4 bg-pink-500 hover:bg-pink-600 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
								All Stories
							</button>
						</Link>
					</div>{" "}

				
				</Container>
			
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	const allStories = await getAllStoriesForHome(preview);
	return {
		props: { allPosts,allStories, preview },
		revalidate: 1,
	};
}

