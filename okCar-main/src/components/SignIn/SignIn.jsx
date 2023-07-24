import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav.jsx";
import { useState } from "react";
import { useLoginMutation } from "../../api/usersApiSlice.js";
import { setCredentials, token } from "../../api/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import jwt_decode from "jwt-decode";
import { CommonUtilities } from "../../util/common.utilities.js";
import { TOASTS, ToastUtility } from "../../util/toast.utilities.js";

const SignIn = () => {
  const [signState, setSignState] = useState({
    username: "",
    password: "",
  });

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastUtility = new ToastUtility(useToast());

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { username, password } = signState;

    if ( !username.length ) { 
      toastUtility.showError('Invalid Form', 'Email is not valid');
      return; 
    }

    if ( !password.length ) { 
      toastUtility.showError('Invalid Form', 'Password is not valid');
      return; 
    }

    if ( ! CommonUtilities.emailValidation(username) ) { 
      toastUtility.showError('Invalid Form', 'Email is not valid');
      return; 
    }

    try {
      const res = await login({ username, password }).unwrap();
      dispatch(token(res));
      var decoded = jwt_decode(res);
      console.log(decoded);
      dispatch(setCredentials({ ...decoded }));
      const { sub, authorities, roles } = decoded;

      console.log(sub, authorities, roles);


      if (roles.includes("USER")) {
        navigate("/");
      } else if (roles.includes("ADMIN")) {
        navigate("/dealersManegment");
      } else if (roles.includes("DEALER")) {
        navigate("/dealer");
      } else {
        console.log("role not intialize");
      }
      
      toastUtility.showCustom(TOASTS.LOGIN_SUCCESS);
    } catch (error) {
      toastUtility.showCustom(TOASTS.LOGIN_FAILED);
    }
  };

  return (
    <>
      <SubNav componentsName={"Login"} />
      {/* // <!-- Page Title End --> */}

      <div
        className="listpgWraper"
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form onSubmit={SubmitHandler}>
                <div className="userccount">
                  <h5>User Login</h5>
                  {/* <!-- login form --> */}
                  <div className="formpanel">
                    <div className="formrow">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="username"
                        onChange={onChangeHandler}
                        value={signState.username}
                        aria-describedby="namenote"
                        required
                      />
                    </div>

                    <div className="formrow">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={onChangeHandler}
                        value={signState.password}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={SubmitHandler}
                      className="btn"
                      value="Login"
                    >
                      <span>Login</span>
                    </button>
                  </div>
                  {/* <!-- login form  end-->  */}

                  {/* <!-- sign up form --> */}
                  <div className="newuser">
                    <i className="fa fa-user" aria-hidden="true"></i> New User?{" "}
                    <Link to="/signup">
                      <span>Register Here </span>
                    </Link>
                    |
                    <Link to="/ForgotPassword">
                      <span> Forgot Password</span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
