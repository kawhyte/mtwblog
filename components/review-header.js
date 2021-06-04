import React from 'react'

function ReviewHeader({title,pattern, summary}) {
    //console.log("pattern ", pattern)
    return (
        <div className={'bg-indigo-50 ' + pattern }  >
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-2 md:py-12 mb-12 mx-auto'>
                <div className='font-playfair-display flex flex-col py-12 text-center w-full mb-4'>
                    <h2 className='mb-3 py-2 px-2 mx-auto text-4xl md:text-6xl font-bold tracking-tighter leading-tight bg-white '>
                       {title} <span className='text-pink-500'>Reviews. </span>
                    </h2>

                    <p className='lg:w-1/3 transform -skew-x-12 mx-auto mb-4 py-2 px-2 bg-black text-white leading-relaxed text-lg'>
                     {summary}
                    </p>
                </div>
            </div>
        </section>
    </div>
    )
}

export default ReviewHeader
