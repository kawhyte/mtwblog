import client, { previewClient } from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  _id,
  hotelRating,
  foodRating,
  linkType,
  verdict,
  blurb,
  categories,
  similar,
  roomType,
  videoUrl,
  gallery,
  mainImageGallery,
  address,
  positives,
  negatives,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`
const storyFields = `
  _id,
  videoUrl,
  gallery,
  mainImageGallery,
  address,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body,
      bodyVerdict
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}
export async function getAllStoriesWithSlug() {
  const data = await client.fetch(`*[_type == "story"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getAllStoriesForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "story"] | order(publishedAt desc){
      ${storyFields}
    }`)
  return getUniquePosts(results)
}
export async function getAllFoodForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}
export async function getAllPostsForCategory(preview, type) {
  
  const results = await getClient(preview)
    .fetch(`*[references("${type}") ] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getAllPostsForNewCategory(preview, type) {
  
  const results = await getClient(preview)
    .fetch(`*[_type =="post" && linkType =="${type}"]  | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}


export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        bodyVerdict,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
        bodyVerdict,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}

export async function getStoryAndMoreStories(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "story" && slug.current == $slug] | order(_updatedAt desc) {
        ${storyFields}
        body,
        bodyVerdict,
        'comments': *[
                      _type == "comment" && 
                      story._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "story" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${storyFields}
        body,
        bodyVerdict,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
