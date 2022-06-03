import Container from "../components/container";
import Section from "../components/story-section";
import ReviewHeader from "../components/review-header";
import Layout from "../components/layout";
import {
	getAllStoriesForHome,
} from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

function AllStories({ allStories, preview }) {
	const moreStories = allStories.slice(0);

	return (
		<>
			<Layout preview={preview} color={true} bgColor={true}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>

				<ReviewHeader
					title={"Stories & Guides"}
					pattern={"hotelpattern"}
					summary={"It's all about the adventure"}
					animation={'/plane.json'}
				/>

				<Container>
					{moreStories.length > 0 && <Section stories={moreStories} />}

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
		revalidate: 10,
	};
}

export default AllStories;
