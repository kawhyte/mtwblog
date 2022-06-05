import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import ReactPlayer from "react-player/youtube";

const serializers = {
	types: {
		youtube2: ({ node }) => {
			return (
				<div className='mb-12 md:mb-24 -mx-5 sm:mx-0  bg-indigo-300'>
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							url={node.url}
							width={"100%"}
							height={"100%"}
							controls={false}
							loop
							playing={true}
							muted
						/>
					</div>
				</div>
			);
		},
	},
	marks: {
		highlight: ({ children }) => {
			return <span className=' bg-yellow-200 p-1'>{children}</span>;
		},
	},
};

export default function PostBody({ content }) {
	console.log("CONTENT ", content);
	return (
		<div className='max-w-4xl  text-justify mx-4 my-10'>
			<BlockContent
				blocks={content}
				serializers={serializers}
				projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
				dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
				className={markdownStyles.markdown}
			/>
		</div>
	);
}
serializers.types.youtube2.displayName = "serializers";
serializers.marks.highlight.displayName = "highlight";
