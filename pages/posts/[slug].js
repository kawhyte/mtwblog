import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Form from "../../components/form";
import ProConList from "../../components/pro-con-list";
import Gallery from "../../components/gallery";
import ReactPlayer from "react-player/youtube";

export default function Post({ post, morePosts, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const opts = {
		height: "390",
		width: "340",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
 console.log("******post",post)
	return (
		<Layout preview={preview} color={true}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{post.title} | {CMS_NAME}
								</title>
								{/* <meta property="og:image" content={post.ogImage.url} /> */}
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								categories={post.categories}
								amenities={post.amenities}
								videoUrl={post.videoUrl}
								address={post.address}
								rating={post.rating}
							/>
							<ProConList
								positives={post.positives}
								negatives={post.negatives}
								verdict={post.verdict}
							/>

							{/* post.videoUrl && 	<div className=' aspect-w-16 aspect-h-9 mb-16'>
						
						<h1 className="font-playfair-display mb-5 text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
						{post.videoUrl.title}
	  </h1>
								<ReactPlayer
									url={post.videoUrl.url}
									width={640}
									height={390}
									muted
								/>
				</div>*/}

					{ post.videoUrl &&  <div className='mb-12 md:mb-24 -mx-5 sm:mx-0'>
								<div className='-mx-5 sm:mx-0'>
									<h1 className='font-playfair-display mb-12 text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left'>
									{post.videoUrl.title ? post.videoUrl.title :  "Video"}
									</h1>
									<ReactPlayer
										url={post.videoUrl.url}
										width={640}
										height={390}
										muted
									/>
								</div>
							</div>
						}
							{post.gallery ? (
								<Gallery posts={post} heading={"Birthday"} />
							) : (
								" "
							)}

							<PostBody content={post.body} />
						</article>
						<SectionSeparator />
						<Comments comments={post.comments} />
						<Form _id={post._id} />

						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</Container>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview);
	return {
		props: {
			preview,
			post: data?.post || null,
			morePosts: data?.morePosts || null,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();
	return {
		paths:
			allPosts?.map((post) => ({
				params: {
					slug: post.slug,
				},
			})) || [],
		fallback: true,
	};
}
