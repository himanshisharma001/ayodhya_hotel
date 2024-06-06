import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get } from '@/api1/apiUtils';

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
  const[hotelList, setHotelList] = useState([]);
  
useEffect(() => {
  
async function fetchHotelList() {
  const res = await get("/hotels") as any; 
  // console.log(res);
  setHotelList(res?.hotels)
}

fetchHotelList();

},[]);


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

          {hotelList.map((data:any) => {

            // console.log(data);
            // console.log(data.images);
            return(
              <>
                <SliderBoxImage image={data.images} />
              </>
            )
          
          })}

           {/* <SliderBoxImage />
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
           <SliderBoxImage /> */}
          </Slider>
        </div>
      </div>
        </>
    )
}

const SliderBoxImage = (props:any) => {
  return (
    <>
    <div style={{margin:'8px',cursor:'pointer'}}>
      <div className="slder-contentbox">
    <img src={props.image} alt="slider-image" className='img-fluid slder-boximgsize' />
    
    <div className="top-right">
      <h6 className='mt-2' style={{fontSize:'14px',fontWeight:'500'}}>50% OFF</h6>
    </div>
    <div className="bottom-left">
      <h6 className='mt-1'>From : <i className="bi bi-currency-dollar"></i>130/night</h6>
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