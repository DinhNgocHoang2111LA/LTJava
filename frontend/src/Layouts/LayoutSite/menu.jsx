import React from "react";
import { Icon } from '@iconify/react';

const ViewMenu =()=>{
    return (<>
         <section className=" bg-main">
                    <div className="container ">
                        <div className="row">
                            
                            <div className="col-12 col-md-9 mx-auto ">
                                <nav className="navbar navbar-expand-lg bg-main">
                                    <div className="container-fluid ">
                                        
                                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                                        <ul className="navbar-nav mb-2 mb-lg-0">
                                            <li className="nav-item mx-3 menu-item rounded">
                                                <a className="nav-link text-white" aria-current="page" href="/category">Danh mục sản phẩm</a>
                                            </li>
                                            <li className="nav-item mx-3 menu-item rounded">
                                                <a className="nav-link text-white" aria-current="page" href="/">Trang chủ</a>
                                            </li>
                                            <li className="nav-item mx-3 menu-item rounded">
                                                <a className="nav-link text-white" href="post_page.html">Giới thiệu</a>
                                            </li>
                                            <li className="nav-item mx-3 menu-item rounded dropdown">
                                                <a className="nav-link text-white" href="2#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Thời trang nam 
                                                <Icon icon="teenyicons:down-solid" />

                                                </a>
                                                <ul className="dropdown-menu">
                                                <li><a className="dropdown-item text-main" href="product_category.html">Quần jean nam</a>
                                                </li>
                                                <li><a className="dropdown-item text-main" href="product_category.html">Áo thun nam </a>
                                                </li>
                                                <li><a className="dropdown-item text-main" href="product_category.html">Sơ mi nam</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item mx-3 menu-item rounded dropdown">
                                                <a className="nav-link text-white" href="2#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Thời trang nữ 
                                                <Icon icon="teenyicons:down-solid" />

                                                </a>
                                                <ul className="dropdown-menu">
                                                <li><a className="dropdown-item text-main" href="product_category.html">Váy</a></li>
                                                <li><a className="dropdown-item text-main" href="product_category.html">Đầm</a>
                                                </li>
                                                <li><a className="dropdown-item text-main" href="product_category.html">Sơ mi nữ</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item mx-3 menu-item rounded">
                                                <a href="/post" className="nav-link text-white">Bài viết</a>
                                            </li>
                                            <li className="nav-item mx-3 menu-item rounded">
                                                <a href="/contact" className="nav-link text-white">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
    </>);
}
export default ViewMenu;