import { Link } from "react-router-dom";
import "./avtar.css";
import AvtarModal from "./AvtarModal";
const Navbar = () => {
  return (
    <>
      
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <a className="logo">
                <Link to="/">
                  <img src="../../../images/logo.png" alt="logo" />
                </Link>
              </a>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="col-md-10 col-sm-12 col-xs-12">
              <div className="navbar navbar-default" role="navigation">
                <div className="navbar-collapse collapse" id="nav-main">
                  <ul className="nav navbar-nav">
                    <li className="dropdown active">
                      <a>Home</a>
                    </li>
                    <li>
                      <Link to="/Carlist">Used Cars</Link>
                    </li>
                    <li>
                      <a href="listing.html">New Cars</a>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li className="postad">
                      <AvtarModal />
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
