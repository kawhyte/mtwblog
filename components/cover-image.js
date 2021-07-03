import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import Image from "next/image";

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <Image
      width={1240}
      height={540}
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
     placeholder="blur" 
     alt={`Cover Image for ${title}`}
      
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200 	rounded-2xl': slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).format('webp').url()}
      

    />
  )

  //console.log("imageObject ", imageObject)

  return (
    <div className="-mx-5 sm:mx-0 ">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
