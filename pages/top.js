import TopList from "../components/top-list-section";
import Layout from "../components/layout";
import { getAllPostsForTop } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import Image from "next/image";

export default function Top({ allPosts, preview }) {
	// console.log(" ALL Posts top ", allPosts);

	const morePosts = allPosts.slice(0, 12);
	return (
		<>
			<Layout preview={preview} color={true} bgColor={false}>
				<Head>
					<title>eeeeTravel and Food Reviews by {CMS_NAME}</title>
				</Head>

				<Container>
					<div className='bg-green-50 rounded-3xl py-8 relative  '>
						{morePosts.length > 0 && <TopList posts={morePosts} />}
						{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					</div>

					<div className=' bg-yellow-50 rounded-3xl py-8 my-10 relative '>
						<div className='absolute bottom-0 right-0 z-0   '>
							<Image
								width={795}
								height={772}
								alt={`Cover Image for passport`}
								className='opacity-5  z-0  '
								src='/passport.svg'
							/>
						</div>
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
