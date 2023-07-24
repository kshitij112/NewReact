import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function Car ({ imageSrc, model, price, year, kilometersDriven, location, fuelType, cc, transmission, lastUpdated }) {

    return (
      <li>
        <div className="row">
          <div className="col-md-3 col-sm-4">
            {/* <div className="ribbon_3 popular">
                      <span>Featured</span>
                    </div> */}
            <div className="adimg">
              <img src={imageSrc} alt="Ad Name" />
            </div>
          </div>
          <div className="col-md-9 col-sm-8">
            <div className="jobinfo">
              <div className="row">
                <div className="col-md-8 col-sm-7">
                  <h3>
                    <a href="#.">{model}</a>
                  </h3>
                  <div className="location">
                    <i
                      className="fa fa-calendar"
                      aria-hidden="true"
                    ></i>{" "}
                    <span>{ year }</span>
                  </div>
                  <div className="location">
                    <i
                      className="fa fa-tachometer"
                      aria-hidden="true"
                    ></i>{" "}
                    <span>{ Number(kilometersDriven).toLocaleString('en-IN') } km</span>
                  </div>
                  <div className="location">
                    <i
                      className="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>{" "}
                    <span>{ location }</span>
                  </div>
                  <div className="clearfix"></div>
                  <div className="vinfo">
                    <span>{ fuelType }</span>
                  </div>
                  <div className="vinfo">
                    <span>{ cc } cc</span>
                  </div>
                  <div className="vinfo">
                    <span>{ transmission }</span>
                  </div>
                  <div className="clearfix"></div>
                  <div className="date">Last Updated: { lastUpdated } day{ Number(lastUpdated) > 1 ? 's' : '' } ago</div>
                </div>
                <div className="col-md-4 col-sm-5 text-right">
                  <div className="adprice">₹{ Number(price).toLocaleString('en-IN') }</div>
                  <div className="listbtn">
                    <Link to="/carDetails">
                      View Details{" "}
                      <i
                        className="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
}

Car.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  kilometersDriven: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  cc: PropTypes.number.isRequired,
  transmission: PropTypes.string.isRequired,
  lastUpdated: PropTypes.number.isRequired
}

export default Car;