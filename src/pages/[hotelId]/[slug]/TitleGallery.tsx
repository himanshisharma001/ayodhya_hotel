import React, { useEffect, useState } from "react";
import { get } from "@/api1/apiUtils";
import CustomImage from "@/helper/customImage";

const TitleGallery = () => {
  const [hotelTitle, setHotelTitle] = useState([]);

  useEffect(() => {
    async function TitleHotel() {
      const data = (await get("/hotels/1")) as any;
      console.log(data?.hotel);
      setHotelTitle(data?.hotel);
    }

    TitleHotel();
  }, []);

  return (
    <>
      <div className="container">
        <p className="page-step-fnt">Home / Room Rent / Room rent details</p>
        <div>
          {hotelTitle && (
            <>
              <h1 className="heading-title-dtls">{hotelTitle.name}</h1>

              <div className="d-flex">
                <p className="para-revw-star">
                  <i className="bi bi-star-fill review-star"></i>{" "}
                  <i className="bi bi-star-fill review-star"></i>{" "}
                  <i className="bi bi-star-fill review-star"></i>{" "}
                  <i className="bi bi-star-fill review-star"></i>{" "}
                  <i className="bi bi-star-half review-star"></i> 4.8 (245)
                </p>
                <p className="para-revw-star ms-3">
                  <i className="bi bi-geo-alt-fill"></i>{" "}
                  {hotelTitle?.address?.street}, {hotelTitle?.address?.city},{" "}
                  {hotelTitle?.address?.state}, {hotelTitle?.address?.country},
                  ({hotelTitle?.address?.postalCode})
                </p>
                <p className="para-revw-star ms-3">
                  <i className="bi bi-bookmarks-fill"></i> 10+K Booked
                </p>
              </div>
            </>
          )}

          <div className="d-flex mt-2 justify-content-end">
            <a href="#" className="text-decoration-none">
              <p className="para-revw-star share-list-icon">
                <i className="bi bi-box-arrow-up-right"></i> Share
              </p>
            </a>
            <a href="#" className="text-decoration-none">
              <p className="para-revw-star ms-4 share-list-icon">
                <i className="bi bi-heart"></i> Wishlist
              </p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1">
            <div className="row">
              {hotelTitle?.images?.length > 0 &&
                hotelTitle?.images.map((data:any, index:any) => {
                  // console.log(data);
                  return (
                    <>
                      <div className="col-md-12">
                        <div>
                          {/* <img
                            src={data}
                            alt="gallery image"
                            className="img-fluid title-grly-image"
                          /> */}
                          <CustomImage 
                           src={data}
                           alt="gallery image"
                           className="img-fluid title-grly-image"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}

              {/* <div className="col-md-12 mt-3">
                <div>
                  <img
                    src="https://www.john-taylor.com/rental-villa-bangalore-east-1278x750-70-L0032BA-73452645.jpg"
                    alt="gallery image"
                    className="img-fluid title-grly-image"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div>
              {/* <img
                src="https://www.john-taylor.com/rental-villa-bangalore-east-1278x750-70-L0032BA-73452645.jpg"
                alt="gallery image"
                className="img-fluid title-grly-image"
              /> */}
              <CustomImage
                src={hotelTitle?.images?.length > 0 && hotelTitle?.images[0]}
                alt="gallery image"
                className="img-fluid title-grly-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleGallery;
