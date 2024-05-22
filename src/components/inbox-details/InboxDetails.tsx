import React from 'react'

const InboxDetails = () => {
  return (

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src="https://img.stayvista.com/gallery/hillside-harmony-4f7854.jpg"  />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h2 className="mb-4"><b>#1 Place To Find The Perfect Property</b></h2>
                    <p className="mb-4 slder-para-titlefnt">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className='slder-para-titlefnt'><i className="bi bi-check-circle-fill me-3" style={{color:'rgb(1, 1, 126)'}}></i>Tempor erat elitr rebum at clita</p>
                    <p className='slder-para-titlefnt'><i className="bi bi-check-circle-fill me-3" style={{color:'rgb(1, 1, 126)'}}></i>Aliqu diam amet diam et eos</p>
                    <p className='slder-para-titlefnt'><i className="bi bi-check-circle-fill me-3" style={{color:'rgb(1, 1, 126)'}}></i>Clita duo justo magna dolore erat amet</p>
                    <a className="text-decoration-none" href="#"><button className='rental-frm-btns mt-4'>Read More</button></a>
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default InboxDetails
