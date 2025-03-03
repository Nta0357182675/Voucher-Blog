import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login/Login'
import Layout from '../Layouts/Layout'
import Home from '../pages/Home/Home'
import Voucher from '../pages/Vouchers/Voucher'
import VoucgeDetail from '../pages/Vouchers/VoucherDetail'
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path="/app" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="campaigns"/>
                    <Route path="vouchers" element={<Voucher />} />
                    <Route path="vouchers/:id" element={<VoucgeDetail />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
