import React from "react";

function Banner() {
  return (
    <>
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
