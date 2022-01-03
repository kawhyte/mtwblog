import TopList from "../components/top-list-section";
import Layout from "../components/layout";
import { getAllPostsForTop } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import Image from "next/image";

export default function Top({ allPosts, preview }) {
	//console.log(" ALL Posts top ", allPosts);
	const filteredHotels = allPosts.filter(function (hotel) {
		return hotel.linkType === "hotel";
	});

	const filteredFood = allPosts.filter(function (food) {
		return food.linkType === "food";
	});
	console.log(" filteredHotels ", filteredFood);

	const morePosts = allPosts;
	return (
		<>
			<Layout preview={preview} color={true} bgColor={false}>
				<Head>
					<title>{CMS_NAME} Top Picks </title>
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
						<p className='lg:w-1/2 w-full text-xl leading-relaxed text-gray-900'>
							We visited over 50 hotels and restaurants over the past few years,
							these are our top picks for the best service, location and value.
						</p>
					</div>
					{/* Top Hotels */}
					<div className='bg-green-50 rounded-3xl py-8 relative z-10 mb-10 '>
						{filteredHotels.length > 0 && (
							<TopList
								posts={filteredHotels}
								header={"Best Hotels"}
								type={"hotel"}
							/>
						)}
					</div>

					{/* Top Food */}
					<div className='bg-yellow-50 rounded-3xl py-8 mb-20 relative z-10 '>
						{filteredFood.length > 0 && (
							<TopList
								posts={filteredFood}
								header={"Best Restaurants"}
								type={"food"}
							/>
						)}
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
