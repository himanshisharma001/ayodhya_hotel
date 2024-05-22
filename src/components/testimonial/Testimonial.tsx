import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <div className="container-fluid mt-5">
        <h2 className="mb-3 text-center"><b>Testimonial</b></h2>
          <div className="mt-4" style={{overflowX:'hidden'}}>
        <div className="carousel-container">
          <Slider {...slider}>
           <TestimonialSlide />
           <TestimonialSlide />
           <TestimonialSlide />
           <TestimonialSlide />
           <TestimonialSlide />
           <TestimonialSlide />
           <TestimonialSlide />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;

const TestimonialSlide = () => {
    return (
        <>
        <div className='testi-slide-box m-2'>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ab voluptate. Molestiae deserunt pariatur nesciunt eligendi tempore quas nam facere fuga, vel suscipit architecto iure aperiam dolorem at in quod?</p>
        
        <div className='d-flex mt-4'>
           <div><img src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" alt="icon" className='img-fluid testi-img-icon' /></div>
           <h6 className='ms-3 mt-3'><b>Lorem, ipsum.</b></h6>
        </div>
        
        </div>
        </>
    )
}
