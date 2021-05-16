import PostPreview from '../components/post-preview'
import Section from './section'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        More Adventures and Reviews
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 gap-16 px-2 py-2 mx-2 my-1 bg-bgcolor rounded-lg">
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
