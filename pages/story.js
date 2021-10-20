import Container from "../components/container";
import Section from "../components/story-section";
import ReviewHeader from "../components/review-header";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome,getAllPostsForCategory,getAllStoriesForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME, HOTEL } from "../lib/constants";

function AllStories({ allStories, preview }) {

	const moreStories = allStories.slice(0);
 
	return (
		<>
			<Layout preview={preview} color={true} bgColor={true}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>
				
				<ReviewHeader title ={"Hotel"} pattern={'hotelpattern'} summary={"Rooms, Amenities Service and Price"}/>

				<Container>
				
				

					{moreStories.length > 0 &&
						<Section
						stories ={moreStories}  
							
						/>}

					{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
				</Container>
				
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allStories = await getAllStoriesForHome(preview);
	return {
		props: { allStories, preview },
		revalidate: 1,
	};
}





export default AllStories
