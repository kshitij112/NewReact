
import SubNav from "../Navbar/SubNav";
import {  useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateDealerMutation } from "../../api/dealersManegmentApiSlice";
// import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";
import { useGetDealerQuery } from "../../api/dealersManegmentApiSlice";

import { useToast } from "@chakra-ui/react";
import { ToastUtility } from "../../util/toast.utilities";
import { CommonUtilities } from "../../util/common.utilities";

const EditDealerProfile = () => {
  
    const {userid,id} = useParams()
    const {data:dealerID,isLoading} = useGetDealerQuery({id});
    const navigate = useNavigate();

    const toastUtility = new ToastUtility(useToast());
    
  console.log(dealerID?.dealerDto)

  console.log(userid,id)
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address: "",
    city: "",
    area: "",
    shopName: "",
    userid,
   
  });


  
  useEffect(() => {
    if (dealerID) {
      const { dealerDto } = dealerID;
      setInputField({
        firstName: dealerDto?.firstName || "",
        lastName: dealerDto?.lastName || "",
        email: dealerDto?.email || "",
        mobileNo: dealerDto?.mobileNo || "",
        address: dealerDto?.address || "",
        city: dealerDto?.city || "",
        area: dealerDto?.area || "",
        shopName: dealerDto?.shopName || "",
        userid,
      });
    }
  }, [dealerID, userid]);
// const { data: v, } = useGetAllDealerQuery();
// console.log(v);
  const [updateDealer] = useUpdateDealerMutation()

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();

    const { email, mobileNo } = inputField;

    if ( !email.length ) { 
      toastUtility.showError('Invalid Form', 'Email is not valid');
      return; 
    }

    if ( ! CommonUtilities.emailValidation(email) ) { 
      toastUtility.showError('Invalid Form', 'Email is not valid');
      return; 
    }

    if ( ! CommonUtilities.mobileNumberValidation(mobileNo) ) { 
      toastUtility.showError('Invalid Form', 'mobile number is not valid');
      return; 
    }

    if ( ! e.target.elements['agree'].checked ) {
      toastUtility.showError('Invalid Form', 'Please accept the Terms and Conditions');
      return;
    }

   try {
    const res = await updateDealer(inputField,).unwrap()
    toastUtility.showSuccess('Saved', 'Dealer details has been updated');
    navigate('/dealersmanegment');

    console.log(res)
   } catch (error) {
    toastUtility.showError('Error', 'An unexpected error has occurred');
    console.log(error)
   }
   
  };

  
  return (
    <>
    {
      isLoading ?
      <p>Loading...</p>
      : 
      <>
      <SubNav componentsName={"Edit Dealer"} />
      <div className="listpgWraper" style={{ backgroundColor: "#F5F7F9" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <form onSubmit={onSubmitHandler}>
                  <div className="userbtns">
                    <h2>Edit Dealer Details </h2>
                  </div>
                  <div className="tab-content">
                    <div
                      id="wsell"
                      className="formpanel tab-pane fade in active"
                    >
                     <div className="formrow">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="firstname"
                          defaultValue={dealerID?.dealerDto?.firstName || ""}
                          onChange={onChangeFormhandler}
                          
                        />
                      </div>
                     <div className="formrow">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Address"
                          defaultValue={dealerID?.dealerDto?.lastName || ""}
                          onChange={onChangeFormhandler}
                          
                        />
                      </div>
                      <div className="formrow">
                        <label>Mobile No</label>
                        <input
                          type="number"
                          name="mobileNo"
                          className="form-control"
                          placeholder="Phone Number"
                          defaultValue={dealerID?.dealerDto?.mobileNo || ""}
                          onChange={onChangeFormhandler}
                          
                        />
                      </div>
                      <div className="formrow">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={onChangeFormhandler}
                          defaultValue={dealerID?.dealerDto?.email|| ""}
                          
                        />
                      </div>
                      <div className="formrow">
                        <label>Address</label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          defaultValue={dealerID?.dealerDto?.address|| ""}
                          onChange={onChangeFormhandler}
                          
                        />
                      </div>
                      <div className="formrow">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          placeholder="City"
                          onChange={onChangeFormhandler}
                          defaultValue={dealerID?.dealerDto?.city|| ""}
                        />
                      </div>
                     
                      <div className="formrow">
                        <label>Area</label>
                        <input
                          type="text"
                          name="area"
                          className="form-control"
                          placeholder="Area"
                          onChange={onChangeFormhandler}
                          defaultValue={dealerID?.dealerDto?.area|| ""}
                        />
                      </div>
                      <div className="formrow">
                        <label>Shop Name</label>
                        <input
                          type="text"
                          name="shopName"
                          className="form-control"
                          placeholder="Shop Name"
                          onChange={onChangeFormhandler}
                          defaultValue={dealerID?.dealerDto?.shopName|| ""}
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="checkbox"
                          value="agree text"
                          name="agree"
                          style={{ marginRight: "10px" }}
                          
                        />
                        Terms and Condition
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit" className="btn" value="Register">
                          Update Dealer
                        </button>
                        <button
                          type="submit"
                          className="btn"
                          value="Register"
                          style={{ backgroundColor: "red" }}
                        >
                          Delete Dealer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    }
      
    </>
  );
};

export default EditDealerProfile;
