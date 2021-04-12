import React from 'react'
import "./Carousel.sass";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slidePhoto from '../../../img/slide.jpg'

export const Carousell = () => {
    return (
        <Carousel
            autoPlay="autoPlay"
            infiniteLoop="infiniteLoop"
            interval={3000}
            stopOnHover={false}
            useKeyboardArrows="useKeyboardArrows"
            showStatus={false}>
            <div className='carousel-promotional-offer'>
                <img src={slidePhoto} alt=""/>
                <div className='promotional-offer'>
                    <div className="promotional-offer-text">
                        Lorem ipsum dolor sit.
                        <p className="author">michael hopkins</p>
                    </div>
                </div>
            </div>
            <div className='carousel-promotional-offer'>
                <img src={slidePhoto} alt=""/>
                <div className='promotional-offer'>
                    <div className="promotional-offer-text">
                        Lorem aliquam distinctio?
                        <p className="author">leo tolstoy</p>
                    </div>
                </div>
            </div>
            <div className='carousel-promotional-offer'>
                <img src={slidePhoto} alt=""/>
                <div className='promotional-offer'>
                    <div className="promotional-offer-text">
                        Amet cumque veniam.
                        <p className="author">emily dickinson</p>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}