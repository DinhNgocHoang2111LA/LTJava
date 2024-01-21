import { Link,Outlet } from "react-router-dom";
import './LayoutAdmin.css'; 
import './vendor.bundle.base.css';
import './style.css';
import '../../Public/css/bootstrap.min.css';
import '../../Public/css/all.min.css';
const LayoutAdmin = () => {
    function handleItemClick(item) {
      const hdlitem = document.getElementById(item);
      hdlitem.classList.toggle("active");
    }

    
  return (
    <>
            <div>
                <section className="hdl-header sticky-top">
                    <div className="container-fluid">
                    <ul className="menutop">
                        <li>
                        <a href="/admin/home">
                            <i className="fa-brands fa-dashcube" /> Shop Thời trang
                        </a>
                        </li>
                        <li className="text-phai">
                        <Link href>
                            <i className="fa-solid fa-power-off" /> Thoát
                        </Link>
                        </li>
                        <li className="text-phai">
                        <Link href>
                            <i className="fa fa-user" aria-hidden="true" /> Chào quản lý
                        </Link>
                        </li>
                    </ul>
                    </div>
                </section>
                <section className="hdl-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 p-0">
                                <div className="hdl-left col-md-3 position-fixed">
                                    <div className="dashboard-name">
                                    Bản điều khiển
                                    </div>
                                    <nav className="m-2 mainmenu">
                                    <ul className="main">
                                        <li className="hdlitem item-sub" id="item0" onClick={()=>handleItemClick("item0")}>
                                            <i className="fa-brands fa-product-hunt icon-left" />
                                            <Link >Sản phẩm</Link>
                                            <i className="fa-solid fa-plus icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link className="sub-item" to="/admin/product/all">Tất cả sản phẩm</Link>
                                                </li>
                                                <li>
                                                    <Link className="sub-item" to="/admin/productstore">Sản phẩm trong kho</Link>
                                                </li>
                                                <li>
                                                    <Link className="sub-item" to="/admin/productsale">Sản phẩm sale</Link>
                                                </li>
                                                
                                                <li>
                                                    <i className="fa-regular fa-circle icon-left" />
                                                    <Link className="sub-item" to="./product/bin">Thùng rác</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item1" onClick={()=>handleItemClick("item1")}>
                                            <i className="fa-brands fa-product-hunt icon-left" />
                                            <Link >Thương hiệu</Link>
                                            <i className="fa-solid fa-plus icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link className="sub-item" to="/admin/brand/all">Tất cả thương hiệu</Link>
                                                </li>
                                                
                                                <li>
                                                    <i className="fa-regular fa-circle icon-left" />
                                                    <Link className="sub-item" to="./brand/bin">Thùng rác</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item2" onClick={()=>handleItemClick("item2")}>
                                            <i className="fa-brands fa-product-hunt icon-left" />
                                            <Link >Loại sản phẩm</Link>
                                            <i className="fa-solid fa-plus icon-right" />
                                            <ul className="submenu">
                                                <li>
                                                    <Link className="sub-item" to="/admin/category/all">Tất cả thương hiệu</Link>
                                                </li>
                                                
                                                <li>
                                                    <i className="fa-regular fa-circle icon-left" />
                                                    <Link className="sub-item" to="./category/bin">Thùng rác</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item3" onClick={()=>handleItemClick("item3")}>
                                        <i className="fa-brands fa-product-hunt icon-left" />
                                        <Link href="#">Bài viết</Link>
                                        <i className="fa-solid fa-plus icon-right" />
                                        <ul className="submenu">
                                            <li>
                                            <Link className="sub-item" to="/admin/post/all">Tất cả bài viết</Link>
                                            </li>
                                            <li>
                                            <Link className="sub-item" to="/admin/post/bin">Thùng rác</Link>
                                            </li>
                                            
                                        </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item4" onClick={()=>handleItemClick("item4")}>
                                        <i className="fa-brands fa-product-hunt icon-left" />
                                        <Link href="#">Thành viên</Link>
                                        <i className="fa-solid fa-plus icon-right" />
                                        <ul className="submenu">
                                            <li>
                                            <Link className="sub-item" to="/admin/user/all">Tất cả thành viên</Link>
                                            </li>
                                            <li>
                                            <Link className="sub-item" to="topic_index.html">Thêm thành viên</Link>
                                            </li>
                                            
                                        </ul>
                                        </li>
                                        <li className="hdlitem item-sub" id="item5">
                                        <i className="fa-brands fa-product-hunt icon-left" />
                                            <Link to="/admin/productstore">Kho hàng</Link>
                                            
                                        </li>
                                        <li className="hdlitem item-sub" id="item6" onClick={()=>handleItemClick("item6")}>
                                        <i className="fa-brands fa-product-hunt icon-left" />
                                            <Link to="./abc/all">testABC</Link>
                                        
                                        
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* Content  */}
                                  <Outlet/>
                                
                                {/*end content*/}
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
    </>
  );
};
export default LayoutAdmin;