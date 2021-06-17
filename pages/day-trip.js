


import Container from "../components/container";
import Section from "../components/section";
import ReviewHeader from "../components/review-header";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForCategory } from "../lib/api";
import Head from "next/head";
import { CMS_NAME, DAY_TRIP } from "../lib/constants";

function AllHotels({ allPosts, preview }) {

	const morePosts = allPosts.slice(0);
 
	return (
		<>
			<Layout preview={preview} color={false}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>
				
				
				<ReviewHeader title ={"Day Trip"} pattern={'daytrippattern'} summary={"Our Day trip adventures"}/>
				
				<Container>

					{morePosts.length > 0 &&
						morePosts.map((post) => {
							<Section
								key={post.slug}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
								webLink={post.webLink}
								address={post.address}
							/>;
						})}

					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
				
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false   }) {
	const allPosts = await getAllPostsForCategory(preview, DAY_TRIP);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}


export default AllHotels