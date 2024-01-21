/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import ViewHeader from "./header";
import ViewMenu from "./menu";
import ViewFooter from "./footer";
import '../../Public/css/home.css';
import '../../Public/css/bootstrap.min.css';
import '../../Public/css/all.min.css';

const LayoutSite = () => {
    return (
        <>
        <ViewHeader/>
        <ViewMenu/>
        <Outlet/>
        <ViewFooter/>
        </>
    );
};
export default LayoutSite;