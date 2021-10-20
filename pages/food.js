import Container from "../components/container";
import Section from "../components/section";
import ReviewHeader from "../components/review-header";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllFoodForHome, getAllPostsForCategory, getAllPostsForNewCategory } from "../lib/api";
import Head from "next/head";
import { CMS_NAME, FOOD } from "../lib/constants";

function AllHotels({ allPosts, preview }) {

 //console.log("FOOOOOD ",allPosts)	
	const morePosts = allPosts.slice(0);

	return (
		<>
			<Layout preview={preview} color={true} bgColor={true}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>

				<ReviewHeader
					title={"Food Reviews"}
					pattern={"foodpattern"}
					summary={"Everything food, drink & restaurants"}
				/>
				<Container>
					{morePosts.length > 0 && <Section posts={morePosts} />}

					{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForNewCategory(preview, "food");
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}

// export async function getStaticProps({ preview = false }) {
// 	const allPosts = await getAllPostsForCategory(preview, FOOD);
// 	return {
// 		props: { allPosts, preview },
// 		revalidate: 1,
// 	};
// }

export default AllHotels;
