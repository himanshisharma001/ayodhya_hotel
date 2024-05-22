import React from 'react'
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TitleGallery from './TitleGallery';
import OverviewDetails from './OverviewDetails';
import PropertyBox from '@/components/property-box/PropertyBox';

const index = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
     <Header />
    <TitleGallery />
    <OverviewDetails />
  
  <PropertyBox />
     <Footer />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </>
  )
}

export default index
