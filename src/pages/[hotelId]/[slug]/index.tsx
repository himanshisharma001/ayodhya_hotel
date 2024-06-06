import React from 'react'
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TitleGallery from './TitleGallery';
import OverviewDetails from './OverviewDetails';
import PropertyBox from '@/components/property-box/PropertyBox';

const index = () => {
  return (
    <>

      <Header />
      <TitleGallery />
      <OverviewDetails />
      <PropertyBox />
      <Footer />

    </>
  )
}

export default index
