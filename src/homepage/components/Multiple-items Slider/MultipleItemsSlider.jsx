import React from 'react'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MultipleItemsSlider.css'
import Buttons from './components/Buttons/Buttons'
import Title from './components/Section Title/Title'
import Carousel from './components/Carousel/Carousel'

const MultipleItemsSlider = () => {
    const sliderRef = useRef(null);
    return (
        <div className='propertiesSection m-[40px]'>
            <div className='section-title relative w-[100%]'>
                <Title />
            </div>
            <div className='section2 w-full relative '>
                <div className='max-w-7xl m-auto content-center relative'>
                    <div className='w-full relative'>
                        <div className='p-[10px]'>
                            <div className='w-full relative'>
                                <Buttons sliderRef={sliderRef} />
                                <Carousel sliderRef={sliderRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MultipleItemsSlider