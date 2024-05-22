import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyBox = () => {
  return (
   <div className="container-fluid mt-5">
    <div className='property-box-vw'>
       <div>
        <h6 style={{color:'rgb(224, 6, 6)'}}><b>RECENTLY ADDED</b></h6>
        <h2><b>Premium Rental Properties</b></h2>
       </div>
       <div>
        <button className='feat-explr-btns'>EXPLORE ALL <i className="bi bi-arrow-right"></i></button>
       </div>
    </div>
          
            <PropertyBoxDetails />
         
   </div>
  )
}

export default PropertyBox;

const PropertyBoxDetails = () => {
  const menuslides = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
        <>
         <div className="mt-4" style={{overflowX:'hidden'}}>
        <div className="carousel-container">
          <Slider {...menuslides}>
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
           <SliderBoxImage />
          </Slider>
        </div>
      </div>
        </>
    )
}

const SliderBoxImage = () => {
  return (
    <>
    <div style={{margin:'8px',cursor:'pointer'}}>
      <div className="slder-contentbox">
    <img src="https://is1-2.housingcdn.com/01c16c28/1e5996b303028164633ea5a8ae7f48fc/v0/fs/4_bhk_villa-for-rent-injambakkam-Chennai-others.jpg" alt="slider-image" className='img-fluid slder-boximgsize' />
    
    <div className="top-right">
      <h6 className='mt-2' style={{fontSize:'14px',fontWeight:'500'}}>5% OFF</h6>
    </div>
    <div className="bottom-left">
      <h6 className='mt-1'>From : <i className="bi bi-currency-dollar"></i> 135.00 /night</h6>
    </div>
    </div>
    <div className='d-flex'>
     <p className='sldr-imgdesrpt'><i className="bi bi-houses-fill" style={{color:'rgb(1, 1, 126)'}}></i> 4 Rooms</p>
     <p className='sldr-imgdesrpt ms-2'><i className="bi bi-people-fill" style={{color:'rgb(1, 1, 126)'}}></i> 5 Guests</p>
    </div>

    <h3 className='slder-title-sz'>Lorem, ipsum.</h3>
    <p className='slder-para-titlefnt'>Lorem ipsum dolor sit amet.</p>
    </div>
    </>
  )
}