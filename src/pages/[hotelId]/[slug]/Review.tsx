import React from 'react'

const Review = () => {
  return (
    <div className='mt-4'>
     <h3>Customer Reviews</h3>
     <div className='cstmer-revws-box'>
     <div className="row">
     <OverRatings title="Location"/>
     <OverRatings title="Rooms"/>
     </div>
     </div>
     <ReviewsShow />
     <LeaveReply />
    </div>
  )
}

export default Review;

const OverRatings = (props:any) => {
    return (
        <>
        <div className="col-md-6 mt-2">
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                <div className='revw-imageicons'><img src="https://s3-alpha.figma.com/hub/file/3580972346/c4404f21-5840-407f-aea9-bc5d7cb9f069-cover.png" alt="icon" className='img-fluid' /></div>
                <div className='mt-2'>
                    <h6>{props.title}</h6>
                    <p>Excellent</p>
                </div>
              </div>
              <h6 className='mt-4'><i className="bi bi-star-fill" style={{color:'#d19b06'}}></i> 5.0</h6>
            </div>
        </div>
        </>
    )
}

const ReviewsShow = () => {
    return (
        <>
        <div className='mt-5'>
        <div className='d-flex justify-content-between'>
            <div className='d-flex'>
            <div className='revw-user-icon'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s" alt="user" /></div>
            <h5 className='ms-3 mt-2'>Ali Tufan</h5>
            </div>
            <p>April 30, 2024</p>
        </div>
        <p className="para-revw-star mt-1">
              <i className="bi bi-star-fill review-star-rate"></i>{" "}
              <i className="bi bi-star-fill review-star-rate"></i>{" "}
              <i className="bi bi-star-fill review-star-rate"></i>{" "}
              <i className="bi bi-star-fill review-star-rate"></i>{" "}
              <i className="bi bi-star-half review-star-rate"></i>  Its fantastic!
            </p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ullam provident quod error, quis ad. Atque praesentium ratione inventore fugiat.</p>
       
       <div className='d-flex flex-wrap'>
        <div className='user-rating-image'><img src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-fotoaibe-1669799.jpg&fm=jpg" alt="user-image" className='img-fluid rounded shadow-sm' /></div>
        <div className='user-rating-image'><img src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-fotoaibe-1669799.jpg&fm=jpg" alt="user-image" className='img-fluid rounded shadow-sm' /></div>
        <div className='user-rating-image'><img src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-fotoaibe-1669799.jpg&fm=jpg" alt="user-image" className='img-fluid rounded shadow-sm' /></div>
       </div>
       
        </div>

        </>
    )
}

const LeaveReply = () => {
    return (
        <>
        <div className='mt-5 leave-rply-box'>
         <h4>Leave a comment</h4>
         <p>Your email address will not be published. Required fields are marked *</p>
         <form action="" className='mt-4'>
           <div className="row">
            <div className="col-md-6 mt-2">
            {/* <label htmlFor="" className="input-labels">Name</label> */}
                    <input type="text" className="input-form" placeholder='Name'/>
            </div>

            <div className="col-md-6 mt-2">
            {/* <label htmlFor="" className="input-labels">Name</label> */}
                    <input type="email" className="input-form" placeholder='Email address'/>
            </div>
            <div className="col-md-12 mt-2">
            <input type="text" className="input-form" placeholder='Title'/>
            </div>
            <div className="col-md-12 mt-2">
            <textarea name="" id="" className="input-form" placeholder='Comment'></textarea>
            </div>
           </div>
           <div>
                <button className="post-comment-btns">Post comment</button>
               </div>
         </form>
        </div>
        </>
    )
}