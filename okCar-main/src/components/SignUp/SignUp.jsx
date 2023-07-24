/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";
import { useState } from "react";
import { useRegisterMutation } from "../../api/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    password: "",
    mobileNo: "",
    roles: "USER",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    confirmPassword: "",
    email: "",
  });

  // const [pHelperText, setPHelperText] = useState("");
  // const [cpHelperText, setCPHelperText] = useState("");

  const dispatch = useDispatch();

  const [register] = useRegisterMutation();

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      password,
      mobileNo,
      roles,
      firstName,
      lastName,
      city,
      address,
      email,
      confirmPassword,
    } = inputField;
    if (password.length < 8) {
      // setPHelperText("characters should be atleast 8");
      toast({
        status: "error",
        position: "top",
        description: "Password  should be atleast 8 Characters ",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      // setPHelperText("atleast one capital letter required");
      toast({
        status: "error",
        position: "top",
        description: "Password atleast one capital letter required",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      // setPHelperText("atleast one small letter required");
      toast({
        status: "error",
        position: "top",
        description: "Password has atleast one small letter required",
      });
      return;
    } else if (!/[0-9]/.test(password)) {
      // setPHelperText("atleast one number required");
      toast({
        status: "error",
        position: "top",
        description: "Password has atleast one number required ",
      });
      return;
    } else if (!/[!@#$%^&*()_\-{}[\]<>,.?:;'"]/.test(password)) {
      // setPHelperText("atleast one special symbol required");
      toast({
        status: "error",
        position: "top",
        description: "Password  should be atleast 8 Characters  ",
      });
      return;
    } else {
      // setPHelperText("");
    }

    if (confirmPassword !== password) {
      // setCPHelperText("passwords do not match");
      toast({
        status: "error",
        position: "top",
        description: "Confirm Password and Passwords do not match",
      });
      return;
    }
    submitForm(e);
  };

  const submitForm = async (e) => {
    console.log(inputField);
    const {
      password,
      mobileNo,
      roles,
      firstName,
      lastName,
      city,
      address,
      email,
      confirmPassword,
    } = inputField;

    try {
      const res = await register({
        password,
        mobileNo,
        roles,
        firstName,
        lastName,
        city,
        address,
        email,
        confirmPassword,
      }).unwrap();
      // if (inputField.password == !inputField.confirmPassword) {
      //   alert("Confirm Password and Passwords do not match");
      // }
      toast({
        status: "success",
        position: "top",
        description: "Successful Register User",
      });
      navigate("/signin");
    } catch (error) {
      toast({
        status: "error",
        position: "top",
        description: "User not register ",
      });
      console.log(error);
    }
  };

  return (
    <>
      <SubNav componentsName={"Register"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <form onSubmit={onSubmitHandler}>
                  <div className="userbtns">
                    <h2>User Register</h2>
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
                          placeholder="First Name"
                          value={inputField.firstName}
                          onChange={onChangeFormhandler}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={onChangeFormhandler}
                          value={inputField.lastName}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <label>Mobile No</label>
                        <input
                          type="number"
                          name="mobileNo"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={onChangeFormhandler}
                          value={inputField.mobileNo}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <label>Email</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={onChangeFormhandler}
                          value={inputField.email}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <label>Address</label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          onChange={onChangeFormhandler}
                          value={inputField.address}
                          required
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
                          value={inputField.city}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={onChangeFormhandler}
                          value={inputField.password}
                          required
                        />
                        {/* {!!pHelperText.length && (
                          <label style={{ color: "rgb(250, 100, 100)" }}>
                            {pHelperText}
                          </label>
                        )} */}
                      </div>
                      <div className="formrow">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={onChangeFormhandler}
                          value={inputField.confirmPassword}
                          required
                        />
                        {/* {!!cpHelperText.length && (
                          <label style={{ color: "rgb(250, 100, 100)" }}>
                            {cpHelperText}
                          </label>
                        )} */}
                      </div>
                      <div className="formrow">
                        <input
                          type="checkbox"
                          value="agree text"
                          name="agree"
                          style={{ marginRight: "10px" }}
                          required
                        />
                        Terms and Condition
                      </div>
                      {/* {error && <p>{error}</p>} */}
                      <button type="submit" className="btn" value="Register">
                        Register
                      </button>
                    </div>
                  </div>

                  <div className="newuser">
                    <i className="fa fa-user" aria-hidden="true"></i> Already a
                    Member ?
                    <Link to="/signin">
                      <span> Login Here</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
