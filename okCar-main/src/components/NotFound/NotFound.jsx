import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";

const NotFound = () => {
  return (
    <>
      <SubNav componentsName={"Not Found"} />

      <div className="error-page-wrap">
        <div className="container">
          <div className="errormain">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "18vh",
              }}
            >
              <h3 style={{ border: "none", fontSize: "10rem" }}>404</h3>
              <h3 style={{ border: "none", marginTop: "10px" }}>
                Page was not Found
              </h3>
            </div>
            <div className="error-msg">
              <p style={{}}>
                The page you are looking is not available or has been removed.
                Try going to Home Page by using the button below.
              </p>
              <Link to="/">
                <a href="#." className="btn">
                  Go to Home Page
                </a>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
