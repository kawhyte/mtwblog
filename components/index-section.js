import React from 'react'
import Section from "./section";
import Link from 'next/link'

function IndexSection({morePosts, sectionBgColor, text, typeText, PostType="posts"}) {
    return (
        <div>
        <div className={`rounded-3xl  p-8 relative  ${ sectionBgColor}`}>
        {morePosts.length > 0 ? (
            <div className='mx-4 flex  flex-col md:flex-row  justify-between  w-full mb-10'>
                <div className='lg:w-1/2 w-full mb-6 lg:mb-0 '>
                    <h1 className='font-fancy  sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                        {text}
                    </h1>
                    <div className='h-1 w-20 bg-pink-500 rounded'></div>
                </div>

                <div className=' md:mx-8'>
                    <Link href='/allreviews' passHref>
                        <button
                            aria-label='Justify'
                            type='button'
                            className='py-2 px-4 cursor-pointer bg-pink-500   hover:bg-pink-600 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  md:w-full transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                            All {typeText}
                        </button>
                    </Link>
                </div>
            </div>
        ) : (
            ""
        )}
        {morePosts.length > 0 && <Section posts={morePosts} PostType={PostType} />}
        {/*morePosts.length > 0 && <MoreStories posts={morePosts} />*/}
    </div>
        </div>
    )
}

export default IndexSection
