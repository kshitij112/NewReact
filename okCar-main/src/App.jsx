import AdminBuyers from "./components/AdminBuyers/AdminBuyers";
import AdminRequest from "./components/AdminRequest/AdminRequest";
import { Routes, Route } from "react-router-dom";
import DealersModel from "./components/Dealers/DealersModel";

//Admin🤴
import AdminPage from "./components/Admin/AdminPage";
// import DealerManegment from "./components/Admin/DealerManegment";

import UserRequest from "./components/Admin/UserRequest";

import SignIn from "./components/SignIn/SignIn.jsx";
import Register from "./components/SignUp/SignUp.jsx";

import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import AddCarDetails from "./components/AddCar/AddCarDetails";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CarCard from "./components/CarDetailsCard/CarDetails";
import RequireAuth from "./features/RequireAuth";
import AppLayout from "./components/appLayout/AppLayout";
import { OnlyAdmin } from "./config/role";
import CantAccess from "./components/cantAccess/CantAccess";
import AddDealer from "./components/Form/AddDealer";
import Contact from "./components/Contact/Contact";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import DealerDetails from "./components/Admin/DealerDetails";
import CarList from "./components/CarDetailsCard/CarList.jsx";
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import EditDealerProfile from "./components/EditDealerProfile/EditDealerProfile";
import Dealer from "./components/Admin/Dealer";
import UpdateCarDetails from "./components/AddCar/UpdateCarDetails";
import MainFooter from "./components/Footer/MainFooter";
import TableCard from "./components/TableCard/TableCard";
import useScrollTop from "./util/useScrollTop";
// import CardDetailsShimmer from "./components/CarDetailsCard/CardDetailsShimmer";
// import Cloudnary from "./Dummy/Cloudnary";
// import Cloudnary from "./Dummy/Cloudnary";

const App = () => {
  useScrollTop();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="/" element={<Home />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/carDetails/:id" element={<CarCard />} />

        <Route element={<AppLayout />}>
          {/* PROTECTED ROUTE FOR ADMIN */}
          <Route
            element={
              <RequireAuth allowedRoles={[...Object.values(OnlyAdmin)]} />
            }
          >
            <Route element={<AdminPage />}>
              <Route path="/dealersManegment" element={<Dealer />} />
              <Route path="/dealersManegment/:id" element={<DealerDetails />} />
              <Route path="/userrequest" element={<UserRequest />} />
              <Route path="/adddealer" element={<AddDealer />} />
              <Route
                path="/editDealerdetails/:userid/:id"
                element={<EditDealerProfile />}
              />
            </Route>
          </Route>

          {/* PROTECTED ROUTE FOR DEALER */}
          {/* <Route
            element={
              <RequireAuth allowedRoles={[...Object.values(OnlyDealer)]} />
            }
          > */}
          <Route path="/dealer" element={<DealersModel />} />
          {/* </Route> */}
          <Route path="/adminrequest" element={<AdminRequest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminbuyers" element={<AdminBuyers />} />
          <Route path="/addcardetails" element={<AddCarDetails />} />
          <Route path="/updateCarDetails" element={<UpdateCarDetails />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/dealer/carDetails/:id" element={<CarCard />} />
          <Route path="/access" element={<CantAccess />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/editUserdetails" element={<EditUserProfile />} />
          <Route path="/editDealerdetails" element={<EditDealerProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/tablecard" element={<TableCard />} />
      </Routes>
      <MainFooter />
    </>
  );
};

export default App;
