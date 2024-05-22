import React from "react";
import Location from './Location';
import Review from "./Review";

const OverviewDetails = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mt-3">
          <div className="d-flex justify-content-between flex-wrap">
            <OverItemIcon title="Duration" details="3 Days" />
            <OverItemIcon title="Guest" details="12 Guests" />
            <OverItemIcon title="Square" details="1300ft2" />
            <OverItemIcon title="Languages" details="English, Hindi" />
          </div>
          <Location />
          <OverViewInfo />
         
          <Review />
        </div>
        <div className="col-md-4 mt-3">
        
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default OverviewDetails;

const OverItemIcon = (props:any) => {
  return (
    <>
      <div className="d-flex">
        <div className="over-icon-views">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyO4tpP7HLeuH6xTLYRDzy02OQjKdiF9DH00S5lhN8w&s"
            alt="icon"
            className="img-fluid"
          />
        </div>
        <div className="ms-3">
          <h6 className="drtn-fnt-sz">{props.title}</h6>
          <p className="dte-tym-prid">{props.details}</p>
        </div>
      </div>
    </>
  );
};

const OverViewInfo = () => {
  return (
    <>
      <div className="overview-info-dtls mt-4">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          fugit? Modi quibusdam ullam excepturi quod, dicta quos dolor ratione
          aliquam similique laborum, at quisquam necessitatibus, ex a beatae.
          Eum fugiat architecto, reprehenderit impedit, hic eaque odit quidem,
          sint corporis recusandae maiores nulla magni modi. Nisi, sit? Ipsam
          unde non facere veritatis maxime consequatur beatae autem, dolor
          reprehenderit nam. Voluptatum quasi ex commodi facere laborum labore,
          in iusto aperiam vitae dolores amet ut quis accusantium expedita
          doloribus nemo deleniti dolorem nisi optio vel at accusamus distinctio
          sed. Recusandae exercitationem optio commodi veritatis ullam mollitia
          consectetur a, aperiam, enim maiores, nulla placeat!
        </p>

        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          fugit? Modi quibusdam ullam excepturi quod, dicta quos dolor ratione
          aliquam similique laborum, at quisquam necessitatibus, ex a beatae.
         
        </p>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          fugit? Modi quibusdam ullam excepturi quod, dicta quos dolor ratione
        </p>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          fugit? Modi quibusdam ullam excepturi quod, dicta quos dolor ratione
        </p>
        <h6>Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          fugit? Modi quibusdam ullam excepturi quod, dicta quos dolor ratione
        </p>

        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, id.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, id.</li>
        </ul>

        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, id.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, id.</li>
        </ol>
      </div>
    </>
  );
};

const BookingForm = () => {
    return (
        <>
        <div className="booking-form">
            <h4 className="text-center mt-2 mb-3" style={{color:'rgb(1, 1, 68)'}}><b>Booking Form</b></h4>
           <form>
                    <label htmlFor="" className="input-labels">Check-in</label>
                    <input type="date" className="input-form" />
                    <label htmlFor="" className="input-labels">Check-out</label>
                    <input type="date" className="input-form" />
                    <label htmlFor="" className="input-labels">Guest</label>
                    <input type="number" className="input-form" min="1" />
                    <div className="mb-3 form-check mt-3">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{border:'solid 1px rgb(190, 190, 190)'}}/>
                 <label className="form-check-label" htmlFor="exampleCheck1">I have read and agree to the website <a href="#">terms and conditions *</a></label>
               </div>
               <div>
                <button className="booking-form-btn">Booking</button>
               </div>
           </form>
        </div>
        </>
    )
}