
import Category from "../Pages/FontEnd/Category";
import Home from "../Pages/FontEnd/Home";
import Cart from "../Pages/FontEnd/Cart";
import Login from "../Pages/FontEnd/Login";
import Registry from "../Pages/FontEnd/Registry";
import CheckOut from "../Pages/FontEnd/Checkout";
import View1 from "../Pages/FontEnd/Category/view1";
import Transaction from "../Pages/FontEnd/Transaction";

const routerSite =[
    {path: "/",component: Home},
    {path: "/cart/:id",component: Cart},
    {path: "/login",component: Login},
    {path: "/user/registry",component: Registry},
    {path: "/category",component: Category},
    {path: "/category/:id",component: View1},
    {path: "/product/checkout/:id",component: CheckOut},
    {path: "/product/checkout/transaction/:id",component: Transaction},

    
];
export default routerSite;