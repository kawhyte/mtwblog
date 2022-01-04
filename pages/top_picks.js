import TopList from "../components/top-list-section";
import Layout from "../components/layout";
import ReviewHeader from "../components/review-header";
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
	//console.log(" filteredHotels ", filteredFood);

	return (
		<>
			<Layout preview={preview} color={true} bgColor={false}>
				<Head>
					<title>{CMS_NAME} Top Picks </title>
				</Head>

				<Container>

				<ReviewHeader
				title={"Our Top Picks"}
				pattern={"foodpattern"}
				summary={"We visited over 50 hotels and restaurants over the past few years, these are our top picks for the best service, location and value."}
				animation={'/top.mp4'}
			/>
					
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
