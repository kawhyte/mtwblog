import PostPreview from '../components/post-preview'
import Section from './section'

export default function MoreStories({ posts }) {
  return (
    <section>
     
      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 py-2 mx-2 my-1 bg-bgcolor">
        {posts.map((post) => (
          <Section
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
