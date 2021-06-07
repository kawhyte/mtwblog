import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const serializers = {
  types: {
    youtube2: ({node}) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} className="bg-green-200  p-2"/>)
    }
  }
}

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl text-center mx-4 sm:text-left">
      <BlockContent blocks={content} serializers={serializers} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}  className={markdownStyles.markdown} />
    </div>
  )
}
