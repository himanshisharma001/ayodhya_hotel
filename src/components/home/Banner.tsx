import React from "react";

function Banner() {
  return (
    <>
           {/* <div className="">
  <div id="mainBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
    <div className="carousel-inner">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-item active" data-bs-interval="7000">
        <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/6b/96/9c/one-bed-room-villa.jpg?w=700&h=-1&s=1' className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>Lorem, ipsum.</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src='https://i.travelapi.com/lodging/7000000/6610000/6601700/6601653/e906e803_z.jpg' className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
        <h5>Lorem, ipsum.</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src='https://i.travelapi.com/lodging/7000000/6610000/6601700/6601653/37b7dd5f_z.jpg' className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
        <h5>Lorem, ipsum.</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src='https://www.oyster.com/wp-content/uploads/sites/35/2019/05/one-bedroom-pool-villa-v14040131-1440.jpg' className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>Lorem, ipsum.</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW ALL</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src='https://images.trvl-media.com/lodging/7000000/6610000/6601700/6601653/a1c24689.jpg?impolicy=resizecrop&rw=500&ra=fit' className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>Lorem, ipsum.</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW ALL</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}


<div className="banner-main-szvws">
<div className="container">
      <div className="rounded p-3" style={{ backgroundColor: "#edebeb" }}>
        <div className="bg-white rounded p-4">
          <h2 className="text-center">
            <b>The villa rental expert for your vacation</b>
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
            aliquid molestias nam qui sit.
          </p>

          <form action="" className="mt-4">
            <div className="row">
              <div className="col-md-4 mt-2">
                <label htmlFor="" className="checkin-label">
                  Check-in Date
                </label>
                <input type="date" className="checkin-inputbx" />
              </div>
              <div className="col-md-4 mt-2">
                <label htmlFor="" className="checkin-label">
                  Check-out Date
                </label>
                <input type="date" className="checkin-inputbx" />
              </div>
              <div className="col-md-2 mt-2">
                <label htmlFor="" className="checkin-label">
                  Adults
                </label>
                <select name="" id="" className="checkin-inputbx">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div className="col-md-2 mt-2">
                <label htmlFor="" className="checkin-label">
                  Children
                </label>
                <select name="" id="" className="checkin-inputbx">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button className="rental-frm-btns">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
    </>
  );
}

export default Banner;
