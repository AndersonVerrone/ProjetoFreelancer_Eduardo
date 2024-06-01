import { Outlet, Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { PublicRoutes } from "./PublicRoutes"
import { LoginPage } from "../pages/LoginPage"
import { AdmPage } from "../pages/AdmPage"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route index element={<RegisterPage />} />
            <Route path="adm" element={<Outlet />} >
                <Route element={<PublicRoutes />} >
                    <Route path="" element={<LoginPage />} />
                </Route>
                <Route element={<ProtectedRoutes />} >
                    <Route path="query" element={<AdmPage />} />
                </Route>
            </Route>
        </Routes>
    )
}