import React from 'react'
import WrapperInside from '../Wrapper-inside/WrapperInside'
import { sliderData } from '../Data/Data'
import WrapperOutside from '../Wrapper-outside/WrapperOutside'
import Slider from 'react-slick'

const Carousel = ({ sliderRef }) => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='carousel relative block visible opacity-1 mb-6 overflow-hidden'>
            <div className='list-draggable relative block overflow-hidden m-0 p-0'>
                <div className='track opacity-1 '>
                    <Slider dots ref={sliderRef} {...settings} className='opacity-1'>
                        {
                            sliderData.map((element, index) => (
                                <div key={index} className='relative w-[323px] px-[15px] mb-6'>
                                    <div className='item-wrap relative p-0'>
                                        <div className='image-wrap'>
                                            <div className='listing-thumb cursor-pointer'>
                                                <a href="#" className='hover-effect'>
                                                    <img src={element.imageSrc} alt='furniture' className='slid max-w-[100%] align-middle rounded-sm' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <WrapperInside props={element} />
                                    <WrapperOutside props={element} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Carousel