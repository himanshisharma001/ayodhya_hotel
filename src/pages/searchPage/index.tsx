import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Index = () => {
    return(
        <>
        <Header />
        <div className="container mt-4">
        <h4 className="find-srch-title">Search Results</h4>
         
            <div className="row">
           
                <div className="col-md-8">
                    <div className="row g-3">
                    <SearchResults />
                    <SearchResults />
                    <SearchResults />
                    <SearchResults />
                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <SearchBoxDate />
                  </div>
            </div>
            
        </div>
     
        <Footer />
        </>
    )
}
export default Index;

const SearchResults = () => {
    return(
        <>
         <div className="col-md-6 mt-3">
           <div className="srch-results-boxvw">
            <div><img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="hotel-image" className="img-fluid" /></div>
           
           <h5 className="title">Lorem, ipsum dolor.</h5>
           <p className="details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, autem! Illo iusto tenetur incidunt assumenda!</p>
           <h6 className="details">Price : <i className="bi bi-currency-rupee"></i>2,999</h6>
           <div><button className="searchs-book-btns">Book Now</button></div>
            <hr />
           <div className="d-flex justify-content-between">
            <div className="srch-amit-dtlsvws"><i className="bi bi-person-circle"></i> 4 GUESTS</div>

            <div className="srch-amit-dtlsvws">FULL INFO <i className="bi bi-arrow-right"></i></div>
           </div>
           </div>
         </div>
        </>
    )
}

const SearchBoxDate = () =>{
    return (
        <>
        <div className="srch-results-boxvw form-sticky-vws-box">
            <form action="">
                <label htmlFor="" className="mt-2 srch-label-form">Check-in date</label>
                <input type="date" className="srch-input-frmvws" />
                <label htmlFor="" className="mt-2 srch-label-form">Check-out date</label>
                <input type="date" className="srch-input-frmvws" />

                <label htmlFor="" className="mt-2 srch-label-form">Adults</label>
                <select name="" id="" className="srch-input-frmvws">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>

                <label htmlFor="" className="mt-2 srch-label-form">Children</label>
                <select name="" id="" className="srch-input-frmvws">
                    <option value="">0</option>
                    <option value="">1</option>
                </select>
                

                <div><button className="srch-results-btnsvws mt-4">Search</button></div>
            </form>
        </div>
        </>
    )
}