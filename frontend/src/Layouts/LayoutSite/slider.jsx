import slide1 from '../../Public/images/slider_1.jpg';
import slide2 from '../../Public/images/slider_2.jpg';
import slide3 from '../../Public/images/slider_3.jpg';
const Viewslider = () => {
    return ( 
        <section className="">
                    <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={slide2} className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={slide3} className="d-block w-100 " alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </section>
     );
}
 
export default Viewslider;