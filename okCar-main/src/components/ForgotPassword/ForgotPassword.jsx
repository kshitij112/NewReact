import { useState } from "react";
import SubNav from "../Navbar/SubNav.jsx";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useForgotPasswordMutation } from "../../api/usersApiSlice.js";
import { ToastUtility } from "../../util/toast.utilities.js";
import { CommonUtilities } from "../../util/common.utilities.js";

const ForgotPassword = () => {
  const toastUtility = new ToastUtility(useToast());
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [createPost, responseData] = useForgotPasswordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if ( !email.length ) { 
      toastUtility.showError('Invalid Form', 'Email is not valid');
      return; 
    }

    if ( ! CommonUtilities.emailValidation(email) ) { 
      toastUtility.showError('Invalid Form', 'Email is not valid');
      return; 
    }

    const response = await createPost(email);

    const error = response['error'];
    const data = response['data'];

    if (error) {
      toastUtility.showError(error.data.status, error.data.message);
      return;
    }

    toastUtility.showSuccess(data.status, data.message);

  };
  return (
    <div>
      <SubNav componentsName={"ForgotPassword"} />
      <div
        className="listpgWraper"
        style={{ minHeight: "62vh", display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="userccount">
                  { !responseData.isLoading && (<><h5>Forgot Password</h5>
                  <h6>Please Enter Email to send Password Reset Link</h6>
                  <div className="formpanel">
                    <div className="formrow">
                      <label>Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <input type="submit" className="btn" value="Submit" />
                  </div></>) }

                  { responseData.isLoading && (
                    <>Loading...</>
                  ) }
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
