/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import "./CarList.css";

import { useState, useEffect } from "react";
import CarListCard from "./CarListCard.jsx";
import { useGetAllCarsQuery } from "../../api/carApiSlice.js";
// import Loading from "../Loading/Loading.jsx";
// import { useParams } from "react-router";

// import { useFilterCarQuery } from "../../api/carApiSlice.js";
// import CarNotFound from "./CarNotFound.jsx";
const CarList = () => {
  // use State for input fields
  const [inputFilter, setInputFilter] = useState({
    year: "",
    fuelType: "",
    transmission: "",
    brand: "",
    model: "",
    area: "",
    maxPrice: "",
    minPrice: "",
  });
  // let { id } = useParams();

  // const { data } = useFilterCarQuery(id);
  // const { data, error, isLoading } = useFilterCarQuery(id);

  // Hanlding pagination
  // const [pageNo, setPageNo] = useState(0);

  // const handleNextPage = () => {
  //   setPageNo((prevPageNo) => prevPageNo + 1);
  // };

  // const handlePreviousPage = () => {
  //   setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 0));
  // };

  // for fetching all cars
  const { data: v } = useGetAllCarsQuery(0);
  // console.log(v);
  const [responseData, setResponseData] = useState([]);

  // setResponseData(data?.list);

  // setResponseData(data?.list);
  // console.log(responseData);

  // on form change handler added
  const onChangeFormHandler = (e) => {
    setInputFilter((previousValue) => {
      return {
        ...previousValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  // form submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputFilter);
  };

  useEffect(() => {
    if (v) {
      setResponseData(v?.list);
    }
  }, [v]);

  // console.log("use Stata data", responseData);
  return (
    <>
      <SubNav componentsName={"Car List"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-5">
              <form onSubmit={onSubmitHandler}>
                <div className="sidebar">
                  {/* <div className="widget">
                    <h4 className="widget-title">Search By Keyword</h4>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Keyword"
                        name="keyword"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                          Go!
                        </button>
                      </span>{" "}
                    </div>
                  </div> */}

                  <div className="widget">
                    <h4 className="widget-title">Price Range</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="number"
                          name="minPrice"
                          className="form-control"
                          placeholder="Min Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          name="maxPrice"
                          className="form-control"
                          placeholder="Max Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Area</h4>
                    <select
                      className="form-control"
                      name="area"
                      value={inputFilter.area}
                      onChange={onChangeFormHandler}
                    >
                      <option>Area</option>
                      <option>Kharadi</option>
                      <option>Hinjewadi</option>
                      <option>Baner</option>
                      <option>Wagholi</option>
                      <option>Karve Nagar</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Year Range</h4>
                    <input
                      type="number"
                      name="year"
                      className="form-control"
                      placeholder="Year"
                      onChange={onChangeFormHandler}
                      pattern="[0-9]*"
                    />
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Brand</h4>
                    <select
                      className="form-control"
                      name="brand"
                      value={inputFilter.brand}
                      onChange={onChangeFormHandler}
                    >
                      <option>Select Brand</option>
                      <option>Tata</option>
                      <option>Honda</option>
                      <option>Toyota</option>
                      <option>Suzuki</option>
                      <option>Hyundai</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Model</h4>
                    <select
                      className="form-control"
                      name="model"
                      value={inputFilter.model}
                      onChange={onChangeFormHandler}
                    >
                      <option>Select Model</option>
                      <option>JIMNY DX MT</option>
                      <option>SUZUKI CIAZ GL AT</option>
                      <option>SWIFT AT</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Transmission</h4>
                    <select
                      className="form-control"
                      name="transmission"
                      value={inputFilter.transmission}
                      onChange={onChangeFormHandler}
                    >
                      <option>Transmission</option>
                      <option>Auto</option>
                      <option>Manual</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Fuel Type</h4>
                    <select
                      className="form-control"
                      name="fuelType"
                      value={inputFilter.fuelType}
                      onChange={onChangeFormHandler}
                    >
                      <option>Fuel Type</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Electric</option>
                    </select>
                  </div>

                  {/* <div className="widget">
                    <h4 className="widget-title">Transmission</h4>
                    <ul className="optionlist">
                      <li>
                        <input
                          type="checkbox"
                          name="auto"
                          value={inputFilter.transmission}
                          id="auto"
                        />
                        <label htmlFor="auto"></label>
                        Auto
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="manual"
                          value={inputFilter.transmission}
                          id="manual"
                        />
                        <label htmlFor="Manual"></label>
                        Manual
                      </li>
                    </ul>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Fuel Type</h4>
                    <ul className="optionlist">
                      <li>
                        <input type="checkbox" name="fuelType" id="Petrol" />
                        <label htmlFor="Petrol"></label>
                        Petrol
                      </li>
                      <li>
                        <input type="checkbox" name="fuelType" id="Diesel" />
                        <label htmlFor="Diesel"></label>
                        Diesel
                      </li>
                      <li>
                        <input type="checkbox" name="checkname" id="Electric" />
                        <label htmlFor="Electric"></label>
                        Electric
                      </li>
                    </ul>
                  </div> */}

                  <div className="searchnt">
                    <button className="btn">
                      <i className="fa fa-search" aria-hidden="true"></i> Update
                      Results
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Car Details Card */}

            {/* {data.length === 0 ? <CarNotFound /> : <CarListCard />} */}
            {responseData.map((carDetails, index) => {
              return <CarListCard key={index} {...carDetails} />;
            })}
          </div>
          <div className="pagiWrap">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="showreslt">Showing 1-10</div>
              </div>
              <div className="col-md-8 col-sm-8 text-right">
                <ul className="pagination">
                  <li className="active">
                    <a>1</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                  <li>
                    <a>3</a>
                  </li>
                  <li>
                    <a>4</a>
                  </li>
                  <li>
                    <a>5</a>
                  </li>
                  <li>
                    <a>6</a>
                  </li>
                  <li>
                    <a>7</a>
                  </li>
                  <li>
                    <a>8</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
