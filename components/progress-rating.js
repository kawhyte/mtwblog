import React from 'react'

function ProgressRating({progress }) {
    let value = `w-${Math.floor(progress)}/5 `

    console.log(" value", value)
    return (
        <div className="flex flex-row justify-center items-center rounded-lg w-52 ">
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className={"h-full text-center text-xs text-white bg-green-400 rounded-full  " + value } >
                </div>
                </div>
                <span className='text-sm ml-3 '>{progress} </span>
        </div>
    )
}

export default ProgressRating
