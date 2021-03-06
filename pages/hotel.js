import Container from "../components/container";
import Section from "../components/section";
import ReviewHeader from "../components/review-header";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForNewCategory } from "../lib/api";
import Head from "next/head";
import { CMS_NAME, HOTEL } from "../lib/constants";

function AllHotels({ allPosts, preview }) {

	const morePosts = allPosts.slice(0);
 
	return (
		<>
			<Layout preview={preview} color={true} bgColor={true}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>
				
				<ReviewHeader title ={"Hotel Reviews"} pattern={'hotelpattern'} summary={"Rooms, Amenities, Service and Price"} animation={'/bath.json'}/>

				<Container>
				
				

					{morePosts.length > 0 &&
						<Section
						posts ={morePosts}  
							
						/>}

					{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
				</Container>
				
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForNewCategory(preview, "hotel");
	return {
		props: { allPosts, preview },
		revalidate: 10,
	};
}


// export async function getStaticProps({ preview = false   }) {
// 	const allPosts = await getAllPostsForCategory(preview, HOTEL);
// 	return {
// 		props: { allPosts, preview },
// 		revalidate: 10,
// 	};
// }


export default AllHotels
