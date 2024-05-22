import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/home/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Categories from "@/components/explore-category/Categories";
import Faq from "@/components/faq/Faq";
import PropertyBox from "@/components/property-box/PropertyBox";
import InboxDetails from "@/components/inbox-details/InboxDetails";
import InboxContact from "@/components/inbox-contact/InboxContact";
import Testimonial from "@/components/testimonial/Testimonial";
import RentalForm from "@/components/rentalform/RentalForm";


// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayodhya Hotel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
       <Banner />
       {/* <RentalForm /> */}
       <PropertyBox />
       <Categories />
       <InboxDetails />
       <Testimonial />
        <InboxContact />
      <Faq />
      <Footer />
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </>
  );
}
