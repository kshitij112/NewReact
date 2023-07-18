// import React from "react";
import { SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";
const CardDetailsShimmer = () => {
  return (
    <>
      <div className="pageTitle" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h1 className="page-heading"></h1>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="breadCrumb">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="advert-header">
                <div className="contentbox">
                  <div className="adimages">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        marginTop: "2em",
                        overflowX: "auto",
                      }}
                    >
                      <Box
                        padding="6"
                        boxShadow="lg"
                        bg="white"
                        h="300px"
                        w="300px"
                      >
                        <SkeletonCircle size="10" />
                        {/* <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="2"
                        /> */}
                      </Box>
                    </div>
                  </div>
                  <SkeletonText
                    mt="4"
                    noOfLines={1}
                    spacing="4"
                    skeletonHeight="2"
                  />
                  <ul className="row carfeature">
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <SkeletonCircle size="10" />
                      </span>
                    </li>

                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <SkeletonCircle size="10" />
                      </span>
                    </li>

                    <li className="col-md-4 col-sm-6">
                      <SkeletonCircle size="10" />
                    </li>
                  </ul>
                  {/* <h3>Seller Comments</h3> */}

                  <Box padding="6" boxShadow="lg" bg="white">
                    <SkeletonCircle size="10" />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="4"
                      skeletonHeight="8"
                    />
                  </Box>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="jbside">
                <div className="adsalary">
                  <SkeletonText
                    mt="4"
                    noOfLines={1}
                    spacing="4"
                    skeletonHeight="10"
                  />
                </div>

                <div className="ptext">
                  {/* <i className="fa fa-map-marker" aria-hidden="true"></i> */}
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </div>
                <div className="clearfix"></div>
                <div className="adButtons">
                  <a href="#." className="btn apply">
                    {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </a>{" "}
                </div>
              </div>

              <div className="jbside">
                <SkeletonText
                  mt="4"
                  noOfLines={1}
                  spacing="4"
                  skeletonHeight="8"
                />
                <ul className="jbdetail">
                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">
                   
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </div> */}
                    <div className="col-md-6 col-xs-6">
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>
                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">Color</div> */}
                    <div className="col-md-6 col-xs-6">
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Assembly</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Imported</span>
                    </div>
                  </li> */}
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Engine Capacity</div>
                    <div className="col-md-6 col-xs-6">
                      <span>1800 cc</span>
                    </div>
                  </li> */}
                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">Body Type</div> */}
                    <div className="col-md-6 col-xs-6">
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Last Updated</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Aug 24, 2017</span>
                    </div>
                  </li> */}
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Ad Ref #</div>
                    <div className="col-md-6 col-xs-6">
                      <span>2043936</span>
                    </div>
                  </li> */}
                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">Model</div> */}
                    <div className="col-md-6 col-xs-6">
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>
                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">KM Driven</div> */}
                    <div className="col-md-6 col-xs-6">
                      {/* <span>{data?.object.kmDriven} km</span> */}
                      {/* <span>{Number(kmDriven).toLocaleString("en-IN")} km</span> */}
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>

                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">Fuel</div> */}
                    <div className="col-md-6 col-xs-6">
                      {/* <span>{data?.object.fuelType}</span> */}
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>
                  <li className="row">
                    {/* <div className="col-md-6 col-xs-6">Transmission</div> */}
                    <div className="col-md-6 col-xs-6">
                      {/* <span>{data?.object.transmission}</span> */}
                      <SkeletonText
                        mt="4"
                        noOfLines={2}
                        spacing="4"
                        skeletonHeight="2"
                      />
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="jbside">
                <h3>Contact This Seller</h3>
                <div className="formpanel">
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="formrow">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <input type="submit" className="btn" value="Submit" />
                </div>
              </div> */}

              <div className="jbside">
                <h3>Stay Safe</h3>
                <div className="gmap">
                  <ul className="unorderlist">
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <SkeletonText
                      mt="4"
                      noOfLines={2}
                      spacing="4"
                      skeletonHeight="2"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailsShimmer;
