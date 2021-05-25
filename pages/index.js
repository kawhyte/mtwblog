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
import Categories from "../components/categories";

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
				<Categories />
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
					
						
<div className="bg-red-200 mx-auto container my-12 max-w-xs"> 
<Link href="/allposts"> 
<button type="button" className="py-2 px-4   bg-pink-500 hover:bg-pink-600 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
View All Reviews
</button>
</Link>
</div>				</Container>
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
