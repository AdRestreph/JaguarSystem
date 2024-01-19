import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { CarouselData } from '../../info/carouselData';


const CarouselHome = () => {
    return (
        <div className='h-[30rem] flex justify-center m-7 '>
            <Carousel className='h-full w-2/3 border border-black rounded-xl' autoplay={true} loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-red-500" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}>
                {CarouselData.map((cimages) => (
                    <img
                        className="h-full w-full object-cover"
                        id={cimages.id}
                        src={cimages.src}
                        alt={cimages.alt}
                    />
                ))}

            </Carousel>
        </div>

    );
}
export default CarouselHome;

