import React from 'react'

function MtwAward() {
    return (
        <div>
        <span className='flex flex-row-reverse justify-center items-center px-3  mx-2 my-2  text-base rounded-2xl text-yellow-800  bg-white absolute '>
        <p className='text-gray-800 font-bold text-sm '>
           Awesome Award
        </p>
        <svg className='h-8 w-8 fill-current text-yellow-400  pt-2 pl-1'>
            <path
                d='M12.467 7.577c.285-.908.491-2.096.491-3.632 0-.412 0-.858-.015-1.27h1.536c.301 0 .301.313.301 1.27 0 1.073-.65 3.054-2.313 3.632zM1.378 3.945c0-.957 0-1.27.301-1.27h1.537c-.016.412-.016.858-.016 1.27 0 1.536.19 2.724.491 3.632C2.028 7 1.378 5.018 1.378 3.945zm13.703-2.542h-2.218a11.863 11.863 0 00-.221-1.27H3.5c-.095.412-.174.857-.222 1.27H1.061c-.602 0-.918.958-.918 2.229 0 2.724 1.663 5.15 4.198 5.381 1.172 1.85 2.82 1.948 2.82 2.56v2.08c-1.284.049-2.504.197-3.359.461v.628c0 .627 0 .627.602.627h7.319c.602 0 .602 0 .602-.627v-.628c-.76-.264-2.012-.412-3.359-.462v-2.08c0-.61 1.648-.693 2.82-2.559 2.535-.23 4.198-2.674 4.198-5.381.016-1.271-.285-2.229-.903-2.229z'
                fillRule='nonzero'></path>
        </svg>
    </span>
        </div>
    )
}

export default MtwAward