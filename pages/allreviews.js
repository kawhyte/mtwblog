import Container from "../components/container";
import Section from "../components/section";
import Layout from "../components/layout";
import ReviewHeader from "../components/review-header";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

function AllReviews({ allPosts, preview }) {
  
	const morePosts = allPosts.slice(0);
 
	return (
		<>
			<Layout preview={preview} color={true} bgColor={true}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>
				
				<ReviewHeader 
				title ={"All Reviews"} 
				pattern={'pattern'} 
				summary={"You want to get out and see the world, but you have so many questions. Check out our trips."} 
				animation={'/all.json'} />
				<Container>
			
				{morePosts.length > 0 &&
					<Section
					posts ={morePosts}  
						
					/>}

				</Container>
				
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
		revalidate: 10,
	};
}


export default AllReviews
