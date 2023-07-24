import AvtarModal from "../Navbar/AvtarModal";


import HomeCarousel from "../carousel/HomeCarousel";
import { Link } from "react-router-dom";
import bghome from "../../../images/slider/Welcome Image.png";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import {
  SimpleGrid,
  // Box,
  Card,
  // CardHeader,
  // Heading,
  CardBody,
  // Text,
  CardFooter,
  // Button,
} from "@chakra-ui/react";

const Home = () => {
  const username = localStorage.getItem("userInfo");
  const user = JSON.parse(username)?.roles || "";

  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [showMoreLogos, setShowMoreLogos] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var pageYOffset = window.scrollY;
      if (pageYOffset > lastScrollTop.current) {
        // downward scroll
        setIsNavbarVisible(false);
      } else if (pageYOffset < lastScrollTop.current) {
        // upward scroll
        setIsNavbarVisible(true);
      }
      // else was horizontal scroll - If needed, you can handle horizontal scrolling here.
      lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
    }, { passive: true });

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []); // Don't forget to add the dependency array here if you have any dependencies

  const toggleLogosVisibility = () => {
    setShowMoreLogos((prevState) => !prevState);
  };


  return (
    <div>
      <div
        className={`header ${isNavbarVisible ? "visible" : ""}`}
        // style={{ position: "sticky", top: "0", zIndex: "1000" }}
      >
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
                width: "500%",
                height: "598px",
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
            textAlign: "center",
          }}
        >
          <div className="aboutinfo">
            <div className="title">
              {/* <span>World&apos;s Leading Used Cars</span> */}
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
                high-resolution images, specifications, and pricing information.
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

      {/* <Car Logos> */}
      <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Available <span>Brand</span>
            </h3>
            <h1 style={{ fontSize: "20px" }}>
              we pride ourselves on offering a wide selection of vehicles from
              renowned car brands. We have established strong partnerships with
              top manufacturers in the industry, ensuring that our customers
              have access to the best and most reliable vehicles on the market.
            </h1>
          </div>
          <div className="topsearchwrap">
            <ul
              className="row makelist"
              style={{
                display: "flex",
                gap: "20px",
                //  flexDirection: "column",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",

                // border: "2px solid black",
              }}
            >


            {/* Existing logos */}
            <li className="col-md-2 col-sm-3 col-xs-6" style={{ cursor: "pointer" }}>
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/Hyundai Logo.png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>Hyundai</strong>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6" style={{ cursor: "pointer" }}>
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/icons8-audi-500.png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>Audi</strong>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6" style={{ cursor: "pointer" }}>
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/icons8-mazda-480.png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>Mazda</strong>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6" style={{ cursor: "pointer" }}>
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/icons8-mercedes-benz-400.png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>Mercedes</strong>
              </li>

              
              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/icons8-bmw-500.png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>BMW</strong>
              </li>





              <li
                className="col-md-2 col-sm-3 col-xs-6 "
                style={{ cursor: "pointer" }}
              >
                <img
                  className="transition-300ms"
                  src="../../../images/logo/new car logos/icons8-volvo-500.png"
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  alt=""
                />
                <strong>Volvo</strong>
              </li>



              
              {/* Center slide-down */}
              <li className="col-md-2 col-sm-3 col-xs-6" style={{ cursor: "pointer" }}>
                <div
                  onClick={toggleLogosVisibility}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                >
                  <img
                    className="transition-300ms"
                    src="../../../images/logo/new car logos/icons8-down-button-50.png"
                    alt="More Logos"
                    style={{ width: "100%", height: "auto", maxWidth: "100px" }}
                  />
                  <strong></strong>
                </div>
                {showMoreLogos && (
                  <div className="slide-down-content" style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                    {/* Additional logos */}
             

                    {/* Continue adding more logos here */}
                    <div>
                      <img src="../../../images/logo/new car logos/Tata Motor Logo.png" alt="Tata Motors" />
                      <strong>Tata Motors</strong>
                    </div>
                    <div style={{ flexDirection: "column" }}>
                      <img src="../../../images/logo/new car logos/suzuki logo.png" alt="Maruti Suzuki" />
                      <strong>Maruti Suzuki</strong>
                    </div>
                    <div>
                      <img src="../../../images/logo/new car logos/Mahindra Logo.png" alt="Mahindra" />
                      <strong>Mahindra</strong>
                    </div>
                    <div>
                      <img src="../../../images/logo/new car logos/Honda Logo.png" alt="Honda" />
                      <strong>Honda</strong>
                    </div>
                    <div>
                      <img src="../../../images/logo/toyota.png" alt="Toyota" />
                      <strong>Toyota</strong>
                    </div>
                  </div>
                )}
              </li>



              

      
     

              
         
                
              
               
           
          






























































































































            


             



              








              












            </ul>
          </div>
        </div>
      </div>

      {/* <Explore by lifestylr cards> */}
      <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Explore by <span>Lifestyle</span>
            </h3>

            <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 3 }}>
              <Card
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                style={{
                  transition: "transform 0.3s",
                  maxWidth: "400px",
                  margin: "0 auto",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* <CardHeader>
    <Heading size='md'>Customer Dashboard</Heading>
  </CardHeader>
  */}
                <CardBody>
                  <img src="../../../images/Cards/cards1.png" />
                </CardBody>
                <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
              </Card>

              <Card
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                style={{
                  transition: "transform 0.3s",
                  maxWidth: "400px",
                  margin: "0 auto",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* <CardHeader>
    <Heading size='md'>Customer Dashboard</Heading>
  </CardHeader> */}
                <CardBody>
                  <img src="../../../images/Cards/cards8.png" />
                </CardBody>
                <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
              </Card>

              <Card
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                style={{
                  transition: "transform 0.3s",
                  maxWidth: "400px",
                  margin: "0 auto",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* <CardHeader>
    <Heading size='md'>Customer Dashboard</Heading>
  </CardHeader> */}
                <CardBody>
                  <img src="../../../images/Cards/cards3.png" />
                </CardBody>
                <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
              </Card>
              <Card
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                style={{
                  transition: "transform 0.3s",
                  maxWidth: "400px",
                  margin: "0 auto",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* <CardHeader>
    <Heading size='md'>Customer Dashboard</Heading>
  </CardHeader>
  */}
                <CardBody>
                  <img src="../../../images/Cards/cards5.png" />
                </CardBody>
                <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
              </Card>
              <Card
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                style={{
                  transition: "transform 0.3s",
                  maxWidth: "400px",
                  margin: "0 auto",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* <CardHeader>
    <Heading size='md'>Customer Dashboard</Heading>
  </CardHeader>
  */}
                <CardBody>
                  <img src="../../../images/Cards/cards6.png" />
                </CardBody>
                <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
              </Card>
              <Card
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                style={{
                  transition: "transform 0.3s",
                  maxWidth: "400px",
                  margin: "0 auto",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* <CardHeader>
    <Heading size='md'>Customer Dashboard</Heading>
  </CardHeader>
  */}
                <CardBody>
                  <img src="../../../images/Cards/cards7.png" />
                </CardBody>
                <CardFooter>{/* <Button>View here</Button> */}</CardFooter>
              </Card>
            </SimpleGrid>
          </div>
        </div>
      </div>

      {/* <Insight Cards> */}
      <div className="section whitebg howitwrap">
        <div className="container">
          <div className="titleTop">
            <h3>
              Insights That <span> Drive Us</span>
            </h3>
          </div>

          <ul
            className="howlist"
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              justifyContent: "center",
            }}
          >
            <li
              className="col-md-4 col-sm-4"
            >
                <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  className="transition-300ms cursor-pointer"
                  src="../../../images/Cards/Insight/Card1.png"
                  alt=""
                  style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                />
            </li>

            <li
              className="col-md-4 col-sm-4"
              
            >
                <img
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  className="transition-300ms cursor-pointer"
                  src="../../../images/Cards/Insight/Card2.png"
                  alt=""
                />
            </li>

            <li
              className="col-md-4 col-sm-4"
            >
                <img
                 onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                 onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  className="transition-300ms cursor-pointer"
                  src="../../../images/Cards/Insight/Card3.png"
                  alt=""
                  style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                />
            </li>
            <li
              className="col-md-4 col-sm-4"
            >
                <img
                 onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                 onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  className="transition-300ms cursor-pointer"
                  src="../../../images/Cards/Insight/Card4.png"
                  alt=""
                  style={{ width: "100%", height: "auto", maxWidth: "400px" }}
                />
            </li>
          </ul>
        </div>
      </div>

      {/* <Create account scetion> */}
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
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
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
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
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
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
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
  );
};

export default Home;
