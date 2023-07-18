import AvtarModal from "../Navbar/AvtarModal";
import HomeCarousel from "../carousel/HomeCarousel";
import { Link } from "react-router-dom";
import bghome from "../../../images/bghome.jpg";

const Home = () => {
  const username = localStorage.getItem("userInfo");
  const user = JSON.parse(username)?.roles || "";

  return (
    <div>
      <div className="header">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-12">
                <Link className="logo" to="/">
                  <img src="../../../images/logo.png" alt="logo" />
                </Link>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
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
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/carlist"> Buy Cars </Link>
                      </li>
                      <li>
                        <Link to="/Contact">Contact Us</Link>
                      </li>

                      <li>
                        <Link to="/adddealer">
                          {user.includes("ADMIN") ? (
                            <button>Add Dealer</button>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                      <li>
                        <Link to="/addcardetails">
                          {user.includes("DEALER") ? (
                            <button>Add Car</button>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                      <li>
                        {username ? (
                          <AvtarModal />
                        ) : (
                          <Link to="/signin">
                            <p> Sign In</p>{" "}
                          </Link>
                        )}
                      </li>
                      {/* 
                      <li className="postad"></li>

                      <li className="postad"></li> */}
                    </ul>
                  </div>
                  {/* <div className="clearfix"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="searchwrap"
          style={{ border: "2px solid white", backgroundColor: "white" }}
        >
          <div className="container">
            {/* <img src="" alt="Image" className="image-in-heading" />   */}

            <h3
              style={{
                color: "#5dc302",
                transition: "transform 0.3s",
                fontSize: "60px",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Buy Cars with Ease!
            </h3>
            {/* <p>
              Search from over 1,00,000 Active Cars */}
            {/* &amp; Post free unlimited
            classNameifieds ads! */}
            {/* </p> */}
            {/* <div className="searchbar">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Car Brand or Model"
                  />
                </div>
                <div className="col-md-2">
                  <select className="form-control">
                    <option>Price</option>
                    <option>₹50,000 - ₹99,999</option>
                    <option>₹1,00,000 - ₹1,49,999</option>
                    <option>₹1,50,000 - ₹1,99,999</option>
                    <option>₹2,00,000 - ₹2,49,999</option>
                   
                  </select>
                </div>
                <div className="col-md-2">
                  <select className="form-control">
                    <option>Area</option>
                    <option>Kharadi</option>
                    <option>Viman Nagar</option>
                    <option>Koreagaon</option>
                    <option>Hinjewadi</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <input type="submit" className="btn" value="Search" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <HomeCarousel />
        <div className="about-wrap">
          <div className="col-md-6">
            <div className="about-image">
              <img
                src={bghome}
                alt="About"
                style={{
                  width: "495%",
                  height: "622px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  transition: "transform 0.5s",
                }}
                className="zoomable-image"
              />
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="aboutinfo">
              <div className="title">
                <span>World&apos;s Leading Used Cars</span>
                <h1>
                  <span>Welcome to</span> Auto Car
                </h1>
              </div>
              <p style={{ fontSize: "16px" }}>
                At &quot;Auto Car&quot;, we are passionate about driving the
                digital transformation of enterprises within the automotive
                industry. Our store-without-walls concept revolutionizes car
                selling, making it efficient, convenient, and customer-centric.
                Join us on this exciting journey as we reshape the way vehicles
                are bought and sold, one digital transaction at a time. Ready to
                experience the future of car selling? Sign up on our platform
                today and embark on a seamless journey towards digitizing your
                automotive sales process.
              </p>
              <ul>
                <li>Revolutionize your car buying experience with ease!</li>
                <li>
                  Access to a wide range of cars and potential buyers/sellers.
                </li>
                <li>
                  Sellers can create detailed listings for their cars, including
                  high-resolution images, specifications, and pricing
                  information.
                </li>
                <li>
                  By eliminating the need for physical showrooms and extensive
                  paperwork, our platform saves valuable time and resources for
                  both buyers and sellers.
                </li>
                {/* <li>Duis non massa id nisl imperdiet iaculis.</li> */}
              </ul>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="section whitebg">
          <div className="container">
            <div className="titleTop">
              <h3>
                Available <span>Brand</span>
              </h3>
              <h1 style={{ fontSize: "20px" }}>
                we pride ourselves on offering a wide selection of vehicles from
                renowned car brands. We have established strong partnerships
                with top manufacturers in the industry, ensuring that our
                customers have access to the best and most reliable vehicles on
                the market.
              </h1>
            </div>
            <div className="topsearchwrap">
              <ul
                className="row makelist"
                style={{
                  display: "flex",
                  gap: "20px",
                  // border: "2px solid black",
                }}
              >
                <li
                  className="col-md-2 col-sm-3 col-xs-6 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/new car logos/Tata Motor Logo.png"
                    alt=""
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <strong>Tata Motors</strong>
                </li>
                <li
                  className="col-md-2 col-sm-3 col-xs-6 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/new car logos/suzuki logo.png"
                    alt=""
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <strong>Maruti Suzuki</strong>
                </li>
                <li
                  className="col-md-2 col-sm-3 col-xs-6 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/new car logos/Hyundai Logo.png"
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    alt=""
                  />
                  <strong>Hyundai</strong>
                </li>
                <li
                  className="col-md-2 col-sm-3 col-xs-6 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/new car logos/Mahindra Logo.png"
                    alt=""
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <strong>Mahindra</strong>
                </li>
                <li
                  className="col-md-2 col-sm-3 col-xs-6 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/new car logos/Honda Logo.png"
                    alt=""
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <strong>Honda</strong>
                </li>
                <li
                  className="col-md-2 col-sm-3 col-xs-6 "
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/toyota.png"
                    alt=""
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                  <strong>Toyota</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section whitebg howitwrap">
          <div className="container">
            <ul className="howlist row">
              <li className="col-md-4 col-sm-4 ">
                <div className="iconcircle">
                  <Link to="/signup">
                    <div
                      onMouseOver={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    >
                      <img
                        className="transition-300ms cursor-pointer"
                        src="images/avatar.png"
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <h4>Create a Free Account</h4>
                <p>
                  Get started on your car buying journey by creating a free
                  account. Discover a tailored experience, expert guidance, and
                  the tools you need to make informed decisions with ease.
                </p>
              </li>

              <li className="col-md-4 col-sm-4">
                <div className="iconcircle">
                  <div
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    <img
                      className="transition-300ms cursor-pointer"
                      src="images/car.png"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Post your Free Car</h4>
                <p>
                  Sell with Ease and Reach a Wide Audience!say goodbye to
                  traditional selling methods and embrace the convenience of our
                  digital car marketplace
                </p>
              </li>

              <li className="col-md-4 col-sm-4">
                <div className="iconcircle">
                  <div
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    <img
                      className="transition-300ms cursor-pointer"
                      src="images/sell-icon.png"
                      alt=""
                    />
                  </div>
                </div>
                <h4>Sold or Buy</h4>
                <p>
                  Maximize Your Car&apos;s Value with Easy Selling & Find Your
                  Dream Car in Just a Few Clicks! Sell with Ease, Buy with
                  Confidence. Unlock a World of Possibilities: Sell, Buy, and
                  Drive!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
