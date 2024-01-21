import Logo from "../Public/images/logo.png";
import { urlImage } from "../Config";
const ViewProductDetail = () => {

    return ( 
        <section className="hdl-maincontent py-2">
          <div className="img-fluid d-flex justify-content-center">
            <img className="img-fluid border w-15" src={Logo} alt="logo"/>

          </div>
          <div className="line "></div>

  <div className="container">
    <div className="row">
      <div className="col-md-6 border-right d-flex justify-content-center">
        <div className="image">
          <img  className="img-fluid w-75" src={urlImage+"/product/231222011746.png"} alt='sddd' />
        </div>
        
      </div>
      <div className="col-md-6">
        <h3 className="text-main">Áo Sweater Nam Basic Cổ Tròn Nhãn Trang Trí Form Regular - 10F23SWE001</h3>
        <h3 className="fs-5"> ""
        </h3>
        <h4 className="text-main py-4"><strong>Giá: 3000000đ</strong></h4>
        {/* chon size */}
        
  



        <div className="mb-3">
          <label htmlFor>Số lượng</label>
          <input type="number" defaultValue={1} name="qty" className="form-control" style={{width: 200}} />
        </div>
        <div className="mb-3">
          <a className="btn btn-primary w-50" href="./checkout">Mua ngay</a>
        </div>
      </div>
    </div>
    <div className="row">
      <h2 className="text-main fs-4 pt-4">Chi tiết sản phẩm</h2>
      <p>
      Áo Len Nữ Dệt Kim Tay Dài Cotton Cổ Tròn Form Regular - 10F23KNIW005 được thiết kế mang phong cách đơn giản, thanh lịch nhưng cũng không kém phần sành điệu dành cho các nàng:

Chất len dệt kim hiện đại, mềm mại và tạo được bề mặt vải mang họa tiết gân bắt mắt
Form áo regular có độ rộng vừa vặn với mọi vóc dáng, thoải mái vận động
Tông màu trầm ấm vô cùng phù hợp với thời những ngày tiết trời se lạnh
Họa tiết dệt gân sành điệu, tạo nên điểm nhấn ấn tượng cho áo cũng như outfit người mặc. 
Là kiểu áo có khả năng mix&match với mọi kiểu quần để cho nàng diện mọi lúc mọi nơi từ nơi công sở đến chốn hẹn hò.
      </p>
    </div>
    <div className="row">
      <h2 className="text-main fs-4 pt-4">Sản phẩm khác</h2>
      <div className="product-category mt-3">
        <div className="row product-list">
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 1</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="product-item border">
              <div className="product-item-image">
                <a href="product_detail.html">
                  <img src="../public/images/product/thoi-trang-nam-1.jpg" className="img-fluid" alt='sddd' id="img1" />
                  <img className="img-fluid" src="../public/images/product/thoi-trang-nam-2.jpg" alt='sddd' id="img2" />
                </a>
              </div>
              <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">Thời trang nam 2</a>
              </h2>
              <h3 className="product-item-price fs-6 p-2 d-flex">
                <div className="flex-fill"><del>200.000đ</del></div>
                <div className="flex-fill text-end text-main">190.000đ</div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section>

     );
}
 
export default ViewProductDetail;