import SubNav from "../Navbar/SubNav";
import { useSelector } from "react-redux";

import { CommonUtilities } from "../../util/common.utilities";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCarByIdQuery,
  useLazyGetCarByIdQuery,
} from "../../api/carApiSlice";
import CardDetailsShimmer from "./CardDetailsShimmer";
const CarDetails = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [largePreview, setLargePreview] = useState(null);
  const [dummyImages] = useState(
    JSON.parse(localStorage.getItem("images")) ?? []
  );
  let { id } = useParams();
  // const responseData = useGetCarByIdQuery(id);
  // const { data } = responseData;
  const [getCarById, { data, isLoading, isError }] = useLazyGetCarByIdQuery(id);
  console.log("Response data:", data?.object);

  // shimmer loading
  const [showComponent1, setShowComponent1] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent1(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!!id) getCarById(id);
  }, []);
  if (!!data && !isLoading && !isError) {
    return (
      <div>
        {showComponent1 ? (
          <CardDetailsShimmer />
        ) : (
          <>
            <SubNav componentsName={data?.object.brand} />
            <div className="listpgWraper">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="advert-header">
                      <div className="contentbox">
                        <div className="adimages">
                          {largePreview && (
                            <img
                              style={{ width: "100%" }}
                              src={largePreview}
                              alt=""
                            />
                          )}
                          {!largePreview && <img src={dummyImages[0]} alt="" />}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "nowrap",
                              marginTop: "2em",
                              overflowX: "auto",
                            }}
                          >
                            {dummyImages.map((image) => {
                              return (
                                <div
                                  onClick={() => {
                                    setLargePreview(() => image);
                                  }}
                                  key={CommonUtilities.randomString(16)}
                                  style={{
                                    overflow: "hidden",
                                    flexShrink: "0",
                                    margin: "1em",
                                    height: "8em",
                                    width: "10em",
                                    backgroundColor: "red",
                                    cursor: "pointer",
                                  }}
                                >
                                  <img src={image} style={{ height: "8em" }} />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <h3>Car Features</h3>
                        <ul className="row carfeature">
                          {data?.object.acFeature && (
                            <li className="col-md-4 col-sm-6">
                              <span className="feat">
                                <img
                                  src="../../../images/icons/minisplit.png"
                                  alt=""
                                />{" "}
                                Air Conditioning
                              </span>
                            </li>
                          )}

                          {data?.object.musicFeature && (
                            <li className="col-md-4 col-sm-6">
                              <span className="feat">
                                <img
                                  src="../../../images/icons/radio.png"
                                  alt=""
                                />{" "}
                                Music
                              </span>
                            </li>
                          )}

                          {data?.object.rearParkingCameraFeature && (
                            <li className="col-md-4 col-sm-6">
                              <span className="feat">
                                <img
                                  src="../../../images/icons/rearcamera-copy.png"
                                  alt=""
                                  style={{ height: "30px" }}
                                />{" "}
                                Rear Parking Camera
                              </span>
                            </li>
                          )}

                          {data?.object.powerWindowFeature && (
                            <li className="col-md-4 col-sm-6">
                              <span className="feat">
                                <img
                                  src="../../../images/icons/power-window.png"
                                  alt=""
                                />{" "}
                                Power Windows
                              </span>
                            </li>
                          )}
                        </ul>
                        <h3>Seller Comments</h3>

                        <p>{data?.object.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="jbside">
                      <div className="adsalary">
                        Price{" "}
                        <strong>
                          {" "}
                          ₹ {Number(data?.object.price).toLocaleString("en-IN")}
                        </strong>
                      </div>

                      <div className="ptext">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        {data?.object.area}, {data?.object.city}
                      </div>
                      <div className="clearfix"></div>
                      <div className="adButtons">
                        <a href="#." className="btn apply">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          {userInfo ? "Request" : <span>please login</span>}
                        </a>{" "}
                      </div>
                    </div>

                    <div className="jbside">
                      <h3>About This Car</h3>
                      <ul className="jbdetail">
                        <li className="row">
                          <div className="col-md-6 col-xs-6">
                            Registered City
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.city}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Color</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.color}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Body Type</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.bodyType}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Model</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.model}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">KM Driven</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.kmDriven} km</span>
                          </div>
                        </li>

                        <li className="row">
                          <div className="col-md-6 col-xs-6">Fuel</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.fuelType}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Transmission</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{data?.object.transmission}</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="jbside">
                      <h3>Stay Safe</h3>
                      <div className="gmap">
                        <ul className="unorderlist">
                          <li>Avoid deals that are too good to be true.</li>
                          <li>
                            Deal with people in your area by meeting face to
                            face to see the item.
                          </li>
                          <li>
                            Never provide your personal or banking information.
                          </li>
                          <li>
                            See our Safety tips regarding vehicle buying and
                            selling.
                          </li>
                          <li>How to spot scam ads?</li>
                          <li>How to protect yourself?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  } else if (isError) return <>Something went wrong</>;
  return <div style={{ minHeight: "80vh" }}></div>;
};

export default CarDetails;
