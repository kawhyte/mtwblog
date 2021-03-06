import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Footer from '../../components/footer'
import Nav from '../../components/navbar'
import ShareButtons from "../../components/share-buttons";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import BodySectionSeparator from "../../components/body-section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Form from "../../components/form";
import ProConList from "../../components/pro-con-list";
import Gallery from "../../components/gallery";
import ReactPlayer from "react-player/youtube";
import RoomTech from "../../components/room-tech";

export default function Post({ post, morePosts, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	// console.log(" post?.mainImageGallery?.images", post?.mainImageGallery?.images)
	// console.log(" post.gallery.images", post.gallery.images)
	//console.log(" post", post)

	let ratingType = post?.hotelRating;
	let shareURL = `https://www.meetthewhytes.com/posts/${post?.slug}`;

	if (post?.linkType === "food") {
		ratingType = post?.foodRating;
	}
	//console.log(" ratingType", ratingType)
	return (
	<> 
	<Nav />
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
								<meta name='description' content={post.title} />
								<meta property='og:title' content={post.title} key='title' />
							</Head>

							<PostHeader
								title={post.title}
								blurb={post.blurb}
								shareURL={shareURL}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								categories={post.categories}
								amenities={post.amenities}
								videoUrl={post.videoUrl}
								address={post.address}
								rating={ratingType}
								roomType={post.roomType}
								linkType={post.linkType}
								gallery={
									post?.mainImageGallery?.images || post?.gallery?.images
								}
								//gallery={post.mainImageGallery.images}
							/>

							<ProConList
								positives={post.positives}
								negatives={post.negatives}
								verdict={post.verdict}
								verdict2={post.bodyVerdict}
							/>
							
							{post?.linkType === "hotel" && post.techRating && (
								<RoomTech
									speed={post.internetSpeed}
									techAvailable={post.techRating}
								/>
							)}

							{post.videoUrl?.url?.match(
								/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm
							) && (
								<>
									<h1 className='font-fancy mb-12 text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left'>
										{post.videoUrl.title ? post.videoUrl.title : "Video"}
									</h1>

									<div className='mb-12 md:mb-24 -mx-5 sm:mx-0 max-w-5xl'>
										<div className='player-wrapper'>
											<ReactPlayer
												className='react-player'
												url={post.videoUrl.url}
												width={"100%"}
												height={"100%"}
												controls={true}
												loop
												muted
											/>
										</div>
									</div>
								</>
							)}

							{/* post.videoUrl && 	<div className=' aspect-w-16 aspect-h-9 mb-16'>
						
						<h1 className="font-fancy mb-5 text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
						{post.videoUrl.title}
	  </h1>
								<ReactPlayer
									url={post.videoUrl.url}
									width={640}
									height={390}
									muted
								/>
				</div>*/}

							<PostBody content={post.body} />

							{post.gallery ? (
								<Gallery posts={post} heading={"Birthday"} />
							) : (
								" "
							)}
						</article>

						
						

						<Comments comments={post.comments} />
						<Form _id={post._id} />

						
						{/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
					</>
				)}
				</Container>
				<Footer />
				</>	
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
		revalidate: 10,
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
