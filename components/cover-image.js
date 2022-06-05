import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import Image from "next/image";

export default function CoverImage({ title, url, imageObject, slug, linkType }) {
  const image = (
    <Image
      width={1240}
      height={540}
      blurDataURL={imageBuilder(imageObject).width(1240).height(540).quality(1).format('webp').url()}
     placeholder="blur" 
     alt={`Cover Image for ${title}`}
      
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 	rounded-2xl': slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).format('webp').url()}
      

    />
  )

  const slugType= linkType==="hotel" || linkType==="food" ? "posts": "stories"
  return (
    <div className="mx-2 sm:mx-0 ">
      {slug ? (
        
        <Link as={`/${slugType}/${slug}`} href={`/${slugType}/[slug]`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
{/*<Link as={`/posts/${slug}`} href="/posts/[slug]">*/}