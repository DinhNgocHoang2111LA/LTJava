import Home from "../Pages/BackEnd/Home";
import Login from "../Pages/BackEnd/Login";
// ==========
import ListProduct from "../Pages/BackEnd/Product/ListProduct";
import CreateProduct from "../Pages/BackEnd/Product/CreateProduct";
import ShowProduct from "../Pages/BackEnd/Product/ShowProduct";
import UpdateProduct from "../Pages/BackEnd/Product/UpdateProduct";
import DeleteProduct from "../Pages/BackEnd/Product/DeleteProduct";
import Bin from "../Pages/BackEnd/Product/BinProduct";
// ==========

// ==========
import ListUser from "../Pages/BackEnd/User/ListUser";
import CreateUser from "../Pages/BackEnd/User/CreateUser";
import UpdateUser from "../Pages/BackEnd/User/UpdateUser";
import ShowUser from "../Pages/BackEnd/User/ShowUser";
import DeleteUser from "../Pages/BackEnd/User/DeleteUser";
// ==========
// ==========
import ProductSale from "../Pages/BackEnd/ProductSale";

// ==========


const routerAdmin =[
    {path: "/admin/",component: Login},
    {path: "/admin/home",component: Home},
    // ===========
    {path: "/admin/product/all",component: ListProduct},
    {path: "/admin/product/create",component: CreateProduct},
    {path: "/admin/product/show/:id",component: ShowProduct},
    {path: "/admin/product/update/:id",component: UpdateProduct},
    {path: "/admin/product/delete/:id",component: DeleteProduct},
    {path: "/admin/product/bin",component: Bin},

    // ===========
    {path: "/admin/user/all",component: ListUser},
    {path: "/admin/user/create-user",component: CreateUser},
    {path: "/admin/user/show/:id",component: ShowUser},
    {path: "/admin/user/update/:id",component: UpdateUser},
    {path: "/admin/user/delete/:id",component: DeleteUser},
    // ===========
    {path: "/admin/productsale",component: ProductSale},

];
export default routerAdmin;