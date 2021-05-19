import React from 'react'
import Navbar from './navbar'

import { Player } from 'video-react';

function Hero() {
   

    return (
        <div>
          
<div class="bg-indigo-900 relative overflow-hidden h-5/6">
<img src="https://images.pexels.com/photos/1030322/pexels-photo-1030322.png?cs=srgb&dl=pexels-jose-espinal-1030322.jpg&fm=jpg" class=" block absolute md:hidden h-full w-full object-cover"/>

<video autoPlay loop muted class="hidden md:block w-full h-full absolute object-cover">
<source src="https://res.cloudinary.com/babyhulk/video/upload/v1621433741/Video/Pexels_Videos_1409899.mp4" type="video/mp4" />Your browser does not support the video tag.
<source src="https://petermedina.com/video/beach.webm" type="video/webm" />Your browser does not support the video tag.
</video>




<div class="inset-0 bg-black opacity-40  absolute">

</div>
<header class="absolute top-0 left-0 right-0 z-20">
   <Navbar />
</header>
<div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
    <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
        <span class="font-bold uppercase text-pink-500">
            
        </span>
        <h1 class="font-playfair-display text-6xl sm:text-7xl text-white leading-tight mt-4">
            Travel, 
            <br/>
             Explore <span className="text-pink-500"> &</span> Eat
        </h1>
        <h4 className="  text-center text-white md:text-left text-2xl mt-5">
        Our journey in discovering and reviewing food, hotels and interesting items.
      </h4>
     
    </div>
</div>
</div>

        </div>
    )
}

export default Hero
