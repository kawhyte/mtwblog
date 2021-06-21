import React from "react";
import Image from "next/image";

import Masonry from "react-masonry-css";
import { imageBuilder } from "../lib/sanity";
//import cn from "classnames";
const breakpointColumnsObj = {
	default: 3,
	1100: 2,
	700: 1,
	500: 1,
};

function Gallery({ posts, heading }) {
	//let valuesArray = Object.values(posts.gallery.images);

	// console.log("OBJECT2 ",valuesArray);
	//console.log("Pages2 ", posts.gallery.images[0]);
	// const image = (
	// 	<img
	// 		width={1240}
	// 		height={540}
	// 		alt={`Cover Image for`}
	// 		className={cn("shadow-small", {
	// 			"hover:shadow-medium transition-shadow duration-200": "test",
	// 		})}
	// 		src={imageBuilder(posts.gallery.images[0])
	// 			.width(1240)
	// 			.height(540)
	// 			.format("webp")
	// 			.url()}
	// 	/>
	//);
	return (
		<section className='body-font'>
			<div className='container px-5 mx-auto'>
				<div className='flex flex-col text-center w-full mb-10 lg:mb-12'>
					<div className='flex '>
						<p className='font-playfair-display text-6xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none text-left'>
							Gallery
						</p>
					</div>
				</div>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className='my-masonry-grid'
					columnClassName='my-masonry-grid_column'>
					{posts.gallery.images.map((item, i) => (
						<div key={i}>
							<div key={i} className='bg-pink-50 rounded-3xl p-1 '>
								<Image
									className=' object-cover rounded-3xl '
									blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
									placeholder="blur" 
									alt={item?.alt}
									src={imageBuilder(posts.gallery.images[i])
										.width(1200)
										.height(1000)
										.format("webp")
										.url()}
									width={1024}
									height={976}
								/>
							
								<span className='px-4 my-4 mx-4 text-xs sm:text-sm md:text-base text-black'>
									{item?.alt}
								</span>
							</div>

						
						</div>
					))}
				</Masonry>
			</div>
		</section>
	);
}

export default Gallery;
