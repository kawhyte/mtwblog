import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import ShareButtons from "../../components/share-buttons";
import MoreStories from "../../components/more-stories";
import Footer from '../../components/footer'
import Nav from '../../components/navbar'
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import BodySectionSeparator from "../../components/body-section-separator";
import Layout from "../../components/layout";
import { getAllStoriesWithSlug, getStoryAndMoreStories } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Form from "../../components/form";
import Gallery from "../../components/gallery";
import ReactPlayer from "react-player/youtube";

export default function Post({ post, morePosts, preview }) {
	//console.log("SLUG Stories ", post);
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	let shareURL = `https://www.meetthewhytes.com/stories/${post?.slug}`;

	return <> 
    <Nav  />
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
                            shareURL={shareURL}
                            coverImage={post.coverImage}
                            date={post.date}
                            //author={post.author}
                            //categories={post.categories}
                            //amenities={post.amenities}
                            //videoUrl={post.videoUrl}
                            address={post.linkType}
                            //gallery={post.gallery.images}
                            gallery={post?.mainImageGallery?.images || post?.gallery?.images}
                        />
                        
                        <BodySectionSeparator />
                        <PostBody content={post.body} />

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
    </>;
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getStoryAndMoreStories(params.slug, preview);
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
	const allPosts = await getAllStoriesWithSlug();
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
