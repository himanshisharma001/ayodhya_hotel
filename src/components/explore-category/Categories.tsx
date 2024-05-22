import React from 'react'
// import image1 from '../explore-category/building.png';

const Categories = () => {
  return (
    <div className='container-fluid mt-4'>
     <div className="row">
        <div className="col-md-4">
            <div className='catgory-boxvw'>
                <h6 className='text-danger explr-cate-topvws'><b>CATEGORIES</b></h6>
                <h2><b>Explore Our Categories</b></h2>
            </div>
        </div>
        <div className="col-md-8 mt-4">
           <div className="row">
         <ExploreBox title="Commercial" category="105 Property"/>
         <ExploreBox title="Housing" category="115 Property"/>
         <ExploreBox title="Apartment" category="125 Property"/>
         <ExploreBox title="Building" category="85 Property"/>
         <ExploreBox title="Vila" category="95 Property"/>
         <ExploreBox title="Studio" category="135 Property"/>
         <ExploreBox title="Warehouse" category="115 Property"/>
         <ExploreBox title="Cottage" category="150 Property"/>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Categories;

const ExploreBox = (props:any) => {
    return (
        <>
           <div className="col-md-3 mt-3">
              <div className='cate-box-vws'>
                <div><img src='https://img.freepik.com/premium-vector/building-logo-icon-design-template-vector_67715-555.jpg' alt="icon" className='img-fluid image-iconvws' /></div>
                <h5 className='mt-1'><b>{props.title}</b></h5>
                <p className='text-muted'><b>({props.category})</b></p>
              </div>
            </div>
        </>
    )
}
