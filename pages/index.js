import Container from "../components/container";
import Section from "../components/section";
import Welcome from "../components/welcome";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link"

export default function Index({ allPosts, preview }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1, 7);

	return (
		<>
			<Layout preview={preview} color={false}>
				<Head>
					<title>Travel and Food Reviews by {CMS_NAME}</title>
				</Head>
				<Hero />
				<Welcome />
				<Container>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							// date={heroPost.date}
							//author={heroPost.author}
							address={heroPost.address}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}

					{morePosts.length > 0 ? (
						<div className='flex  flex-row justify-between'>
							<h2 className='font-playfair-display sm:my-8 text-2xl md:text-3xl  font-medium tracking-tight leading-tight'>
								More Reviews
							</h2>
<Link href="/allposts"> 
							<button className='px-2 py-2 font-medium tracking-wide text-xl text-indigo-500 capitalize transition-colors duration-200 transform  rounded-md dark:bg-gray-800 hover:underline dark:hover:bg-gray-700 focus:outline-none '>
								View All Reviews
							</button></Link>
						</div>
					) : (
						""
					)}
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
							/>;
						})}

					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
