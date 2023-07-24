// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import SubNav from "../Navbar/SubNav";
// import { useToast } from "@chakra-ui/react";
// import { useResetPasswordMutation } from "../../api/usersApiSlice";

// const ChangePasswordPage = () => {
//   const toast = useToast();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const token = searchParams.get("token");

//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [resetPassword, { isLoading }] = useResetPasswordMutation();
//   // const [error, setError] = useState("");

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (newPassword === confirmPassword) {
//         const result = await resetPassword({ password: newPassword, token });
//         toast({
//           status: "sucess",
//           position: "top",
//           description: "Password Updated Succesfully",
//         });
//         console.log("Password Update Succesfully ");
//         navigate("/");
//       } else {
//         toast({
//           status: "error",
//           position: "top",
//           description: "Password and Confirm Password not match",
//         });
//       }
//     } catch (error) {
//       toast({
//         status: "error",
//         position: "top",
//         description: "Something went wrong",
//       });
//     }
//   };

//   return (
//     <>
//       <SubNav componentsName={"Reset Password"} />
//       <div
//         className="listpgWraper"
//         // style={{
//         //   height: "80vh",
//         //   display: "flex",
//         //   // justifyContent: "center",
//         //   alignItems: "center",
//         // }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 col-md-offset-3">
//               <div className="userccount">
//                 <h5>Reset Password</h5>
//                 <p>Here the token {token}</p>
//                 <div className="formpanel">
//                   <form onSubmit={handleSubmit}>
//                     <div className="formrow">
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="New Password"
//                         value={newPassword}
//                         onChange={handleNewPasswordChange}
//                         required
//                       />
//                     </div>
//                     <div className="formrow">
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Confirm Password"
//                         value={confirmPassword}
//                         onChange={handleConfirmPasswordChange}
//                         required
//                       />
//                     </div>
//                     {/* {error && <p>{error}</p>} */}
//                     <input type="submit" className="btn" value="Update" />
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChangePasswordPage;

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubNav from "../Navbar/SubNav";
import { useToast } from "@chakra-ui/react";
import { useResetPasswordMutation } from "../../api/usersApiSlice";
import { ToastUtility } from "../../util/toast.utilities";

// import { useRegisterMutation } from "../../api/usersApiSlice";
const ChangePasswordPage = () => {
  // const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toastUtility = new ToastUtility(useToast());
  // const [error, setError] = useState("");
  // const [resetpassword] = useRegisterMutation()

  const [createPost, responseData] = useResetPasswordMutation();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      toastUtility.showError('Password Incorrect', 'characters should be atleast 8');
      return;
    }
    else if (!/[A-Z]/.test(newPassword)) {
      toastUtility.showError('Password Incorrect', 'atleast one capital letter required')
      return;
    }
    else if (!/[a-z]/.test(newPassword)) {
      toastUtility.showError('Password Incorrect', 'atleast one small letter required')
      return;
    }
    else if (!/[0-9]/.test(newPassword)) {
      toastUtility.showError('Password Incorrect', 'atleast one number required')
      return;
    }
    else if (!/[!@#$%^&*()_\-{}[\]<>,\.?:;'"]/.test(newPassword)) {
      toastUtility.showError('Password Incorrect', 'atleast one special symbol required')
      return;
    }
    else {
      setPHelperText('');
    }

    if (confirmPassword !== newPassword) {
      toastUtility.showError('Password Incorrect', "Password and Confirm Password do not match")
      return;
    }
    submitForm(e)
  }

  function setPHelperText(e) { }

  const submitForm = async (e) => {

    try {
      console.log(token, newPassword);
      createPost(token, newPassword);
      if (responseData.error) {
        toastUtility.showError('Password Incorrect', responseData.error.message)
      } else {
        toastUtility.showSuccess('Request Successful', 'Password updated successfully');
        navigate("/");
      }
    } catch (error) {
      toastUtility.showError('Password Incorrect', 'An error occurred while updating the password');
    }
  };

  return (
    <>
      <SubNav componentsName={"Reset Password"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <h5>Reset Password</h5>
                {/* <p>Here is the token: {token}</p> */}
                <div className="formpanel">
                  <form onSubmit={handleSubmit}>
                    <div className="formrow">
                      <label>New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                      />
                    </div>
                    <div className="formrow">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                    </div>
                    <input type="submit" className="btn" value="Update" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordPage;
