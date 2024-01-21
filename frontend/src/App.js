import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutSite from "./Layouts/LayoutSite";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import Login from "./Pages/FontEnd/Login";


function App() {

  return (
    <BrowserRouter>
      <Routes path="/login" element ={<Login/>}>
        <Route path="/" element={<LayoutSite />}>
          {AppRouter.routerSite.map((route, index)=>{
            const Page= route.component;
            return <Route path={route.path} element={<Page />} key={index} />
          })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {AppRouter.routerAdmin.map((route, index)=>{
            const Page= route.component;
            return <Route path={route.path} element={<Page />} key={index} />
          })}
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
