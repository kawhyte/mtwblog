import TopList from "../components/top-list-section";
import Layout from "../components/layout";
import { getAllPostsForTop } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import Image from "next/image";

export default function Top({ allPosts, preview }) {
	//console.log(" ALL Posts top ", allPosts);

	const morePosts = allPosts;
	return (
		<>
			<Layout preview={preview} color={true} bgColor={false}>
				<Head>
					<title>Our top Picks by {CMS_NAME}</title>
				</Head>

				<Container>
					<div className='flex flex-wrap w-full mt-20 mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Our Top Picks
							</h1>
							<div className='h-1 w-20 bg-pink-500 rounded'></div>

							{/*<p className="mt-3 leading-relaxed text-gray-500"> Updated December 23, 2021</p>*/}
						</div>
						<p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
							We visited over 50 hotels and restaurants over the past few years,
							these are our top picks for the best service, location and value.
						</p>
					</div>

					<div className='bg-green-50 rounded-3xl py-8 relative z-10 mb-10 '>
						{morePosts.length > 0 && (
							<TopList
								posts={morePosts}
								header={"Best Hotels"}
								type={"hotel"}
							/>
						)}
						{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					</div>
					<div className='bg-yellow-50 rounded-3xl py-8 mb-20 relative z-10 '>
						{morePosts.length > 0 && (
							<TopList
								posts={morePosts}
								header={"Best Restaurants"}
								type={"food"}
							/>
						)}
						{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					</div>
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForTop(preview);
	return {
		props: { allPosts, preview },
		revalidate: 100,
	};
}
