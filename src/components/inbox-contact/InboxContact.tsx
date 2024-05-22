import React from 'react'

const InboxContact = () => {
  return (
    <div className="container-xxl mt-5">
    <div className="container">
        <div className="bg-light rounded p-3">
            <div className="bg-white rounded p-4">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid rounded w-100" src="https://nrdcindia.com/uploads/images/1568886999Conatct2.jpg" alt="contact Image" />
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="mb-4">
                            <h3 className="mb-3"><b>Contact With Our Certified Agent</b></h3>
                            <p className='slder-para-titlefnt'>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                        </div>
                        <a href="#" className="text-decoration-none"><button className='rental-frm-btns mt-2'><i className="bi bi-telephone-fill me-2"></i>Make A Call</button></a>
                        <a href="#" className="text-decoration-none"><button className='ms-3 rental-cnt-btns mt-2'><i className="bi bi-calendar-week-fill me-2"></i>Get Appoinment</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default InboxContact
