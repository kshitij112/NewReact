import SubNav from "../Navbar/SubNav";

const Contact = () => {
  return (
    <>
      <SubNav componentsName={"Contact Us"} />
      <div className="inner-page">
        <div className="container">
          <div className="contact-wrap">
            <div className="row">
              <div className="contact-now">
                <div className="col-md-4 column">
                  <div className="contact">
                    <span>
                      <i
                        className="fa fa-home"
                        onMouseOver={(e) =>
                          (e.target.style.transform = "scale(1.1)")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      ></i>
                    </span>
                    <div className="information">
                      <strong>Address:</strong>
                      <p>
                      314, 315, Gera’s Imperium Alpha, Eon Free Zone Rd, Rajaram Patil Nagar,Kharadi
                        <br />
                        Pune, Maharashtra 411014
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 column">
                  <div className="contact">
                    <span>
                      <i
                        className="fa fa-envelope"
                        onMouseOver={(e) =>
                          (e.target.style.transform = "scale(1.1)")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      ></i>
                    </span>
                    <div className="information">
                      <strong>Email Address:</strong>
                      <p>info@opticalarc.com</p>
                      {/* <p>investigate@your-site.com</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 column">
                  <div className="contact">
                    <span>
                      <i
                        className="fa fa-phone"
                        onMouseOver={(e) =>
                          (e.target.style.transform = "scale(1.1)")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.transform = "scale(1)")
                        }
                      ></i>
                    </span>
                    <div className="information">
                      <strong>Phone No:</strong>
                      <p>+91 89996 13069</p>

                      {/* <p>+12 345 67 09</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 column">
                <div className="contact-form text-align-left">
                  <div id="message"></div>
                  <form
                    method="post"
                    action=""
                    name="contactform"
                    id="contactform"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        {/* <label>Full name</label> */}
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-md-6">
                        {/* <label>Phone Number</label> */}
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-6">
                        {/* <label>Email</label> */}
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6">
                        {/* <label>Address</label> */}
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Address"
                        />
                      </div>
                      <div className="col-md-12">
                        {/* <label>Details</label> */}
                        <textarea
                          rows="4"
                          name="comments"
                          id="comments"
                          placeholder="Details"
                        ></textarea>
                      </div>
                      <div
                        className="col-md-12"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          title=""
                          className="button"
                          type="submit"
                          id="submit"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
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

export default Contact;
