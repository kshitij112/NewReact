import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubNav from "../Navbar/SubNav";
import { useSelector } from "react-redux";
import { usePutDealerCarMutation } from '../../api/dealersManegmentApiSlice';
const UpdateCarDetails = () => {
  
  const [ putDealerCar, { data: responseData, isLoading: isCarPutLoading, isError: isCarPutError }] = usePutDealerCarMutation();
  const data = useSelector(state => state.dealersSelectedCar.selectedCar);
  const navigate = useNavigate('/dealers');
  
  useEffect(() => {
    if (!data) navigate('/dealer');
  }, []);

  const [formData, setFormData] = useState({
    brand: data?.brand || "",
    bodyType: data?.bodyType || "",
    price: data?.price || "",
    model: data?.model || "",
    year: data?.year || "",
    transmission: data?.transmission || "",
    color: data?.color || "",
    city: data?.city || "",
    fuelType: data?.fuelType || "",
    kmDriven: data?.kmDriven || "",
    carInsurance: data?.carInsurance || "",
    registration: data?.registration || "",
    description: data?.description || "",
    safetyDescription: data?.safetyDescription || "",
    area: data?.area || "",
    carStatus: data?.carStatus || "",
    noOfWheels: data?.noOfWheels || "",
    ownerSerial: data?.ownerSerial || "",
    tyre: data?.tyre || "",
    dealer_id: data?.dealer_id || "",
    //features
    acFeature: data?.acFeature || false,
    musicFeature: data?.musicFeature || false,
    powerWindowFeature: data?.powerWindowFeature || false,
    rearParkingCameraFeature: data?.rearParkingCameraFeature || false,
  });
  const [images, setImages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the form data to send to the backend
    const formdata = {
      brand: formData.brand,
      price: formData.price,
      model: formData.model,
      year: formData.year,
      bodyType: formData.bodyType,
      transmission: formData.transmission,
      color: formData.color,
      registration: formData.registration,
      kmDriven: formData.kmDriven,
      fuelType: formData.fuelType,
      area: formData.area,
      carInsurance: formData.carInsurance,
      city: formData.city,
      description: formData.description,
      safetyDescription: formData.safetyDescription,
      carStatus: formData.carStatus,
      noOfWheels: formData.noOfWheels,
      ownerSerial: formData.ownerSerial,
      tyre: formData.tyre,
      dealer_id: "",
      // features
      acFeature: formData.acFeature,
      musicFeature: formData.musicFeature,
      powerWindowFeature: formData.powerWindowFeature,
      rearParkingCameraFeature: formData.rearParkingCameraFeature,
      // images,
    };

    // Send the form data to the backend
    // try {
    //   const response = await axios.post("/api/addCar", data); // Replace "/api/addCar" with the actual backend API endpoint
    //   console.log(response.data); // Handle the response from the backend
    // } catch (error) {
    //   console.error(error); // Handle any errors that occur during the request
    // }
    
    if (data?.carId){
      putDealerCar({ id: data.carId, body: formData })
        .then(response => {
          if (response.error) {
            alert('Error saving car'); return;
          }
          navigate('/dealer');
        })
        .catch(error => { console.error('Something aint right') })
    }
    console.log(formdata);
  };

  function handleImage(event) {
    const fileList = event.target.files;
    const imageArray = Array.from(fileList);
    setImages(imageArray);
    console.log(imageArray);
  }

  return (
    <>
      <SubNav componentsName={"Edit Car Details"} />
      <div className="listpgWraper">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="userccount">
                  <div className="formpanel">
                    {/* <h5>Car Information</h5> */}
                    <h5>Edit Details Page</h5>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Brand</label>
                          <input
                            type="text"
                            name="brand"
                            className="form-control"
                            placeholder="Car Brand"
                            value={formData.brand}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                brand: event.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Price</label>
                          <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Car Price"
                            value={formData.price}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                price: event.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Model</label>
                          <input
                            className="form-control"
                            name="model"
                            placeholder="Model"
                            value={formData.model}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                model: event.target.value,
                              });
                            }}
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Year</label>
                          <input
                            className="form-control"
                            name="year"
                            value={formData.year}
                            type="number"
                            placeholder="Manufacture Year"
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                year: event.target.value,
                              });
                            }}
                            required
                          ></input>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Body Type</label>
                          <select
                            className="form-control"
                            name="bodyType"
                            required
                            value={formData.bodyType}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                bodyType: event.target.value,
                              });
                            }}
                          >
                            <option>Body Type</option>
                            <option value={"Sedan"}>Sedan</option>
                            <option value={"Hatchback"}>Hatchback</option>
                            <option value={"SUV"}>SUV</option>
                            <option value={"MUV"}>MUV</option>
                            <option value={"Coupe"}>Coupe</option>
                            <option value={"Convertibles"}>Convertibles</option>
                            <option value={"Pickup Trucks"}>
                              Pickup Trucks
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Transmission</label>
                          <select
                            required
                            className="form-control"
                            name="transmission"
                            value={formData.transmission}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                transmission: event.target.value,
                              });
                            }}
                          >
                            <option>Transmission</option>
                            <option>Automatic</option>
                            <option>Manual</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>No of Wheels</label>
                          <input
                            required
                            type="number"
                            name="noOfWheels"
                            className="form-control"
                            placeholder="Number of Wheels"
                            value={formData.noOfWheels}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                noOfWheels: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        {/* <div className="formrow">
                          <label>Owner Type</label>
                          <input
                            required
                            type="number"
                            name="ownerSerial"
                            className="form-control"
                            placeholder="Owner Type"
                            value={formData.ownerSerial}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                ownerSerial: event.target.value,
                              })
                            }
                          />
                        </div> */}
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Tyre</label>
                          <input
                            required
                            type="text"
                            name="tyre"
                            className="form-control"
                            placeholder="Tyre"
                            value={formData.tyre}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                tyre: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Color</label>
                          <input
                            required
                            type="text"
                            placeholder="Color"
                            className="form-control"
                            value={formData.color}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                color: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      {/* <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Engine Capacity"
                          className="form-control"
                          value={formData.engineCapacity}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              engineCapacity: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div> */}

                      {/* <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Mileage"
                          className="form-control"
                          value={formData.mileage}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              mileage: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div> */}

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Registration</label>
                          <input
                            required
                            type="text"
                            placeholder="Registration"
                            className="form-control"
                            value={formData.registration}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                registration: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Km Driven</label>
                          <input
                            required
                            type="number"
                            placeholder="Km Driven"
                            className="form-control"
                            value={formData.kmDriven}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                kmDriven: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <select
                            required
                            className="form-control"
                            name="fuelType"
                            value={formData.fuelType}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                fuelType: event.target.value,
                              });
                            }}
                          >
                            <option>Fuel Type</option>
                            <option>Petrol</option>
                            <option>Diesel</option>
                            <option>Electric</option>
                            <option>Bio-Fuel</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <select
                            required
                            className="form-control"
                            name="msalary"
                            value={formData.carInsurance}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                carInsurance: event.target.value,
                              });
                            }}
                          >
                            <option>Car Insurance</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>City</label>
                          <input
                            required
                            type="text"
                            placeholder="City"
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                city: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="formrow">
                          <label>Area</label>
                          <input
                            required
                            className="form-control"
                            name="area"
                            placeholder="Area"
                            value={formData.area}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                area: event.target.value,
                              });
                            }}
                          ></input>
                        </div>
                      </div>

                      {/* Features */}

                      <div className="col-md-12">
                        <h5>Features</h5>
                        <div className="formrow">
                          <ul className="row featchoose">
                            <li className="col-md-4">
                              <input
                                type="checkbox"
                                name="musicFeature"
                                checked={ formData.musicFeature || false}
                                onChange={(event) => {
                                  setFormData({
                                    ...formData,
                                    musicFeature: event.target.checked,
                                  });
                                }}
                              />{" "}
                              Music
                            </li>
                            <li className="col-md-4">
                              <input
                                type="checkbox"
                                name="powerWindowFeature"
                                checked={ formData.powerWindowFeature || false}
                                onChange={(event) => {
                                  setFormData({
                                    ...formData,
                                    powerWindowFeature: event.target.checked,
                                  });
                                }}
                              />{" "}
                              Power Windows
                            </li>
                            <li className="col-md-4">
                              <input
                                type="checkbox"
                                name="acFeature"
                                checked={formData.acFeature || false}
                                onChange={(event) => {
                                  setFormData({
                                    ...formData,
                                    acFeature: event.target.checked,
                                  });
                                }}
                              />{" "}
                              Air Conditioning
                            </li>
                            <li className="col-md-4">
                              <input
                                type="checkbox"
                                name="rearParkingCameraFeature"
                                checked={ formData.rearParkingCameraFeature || false }
                                onChange={(event) => {
                                  setFormData({
                                    ...formData,
                                    rearParkingCameraFeature:
                                      event.target.checked,
                                  });
                                }}
                              />{" "}
                              Rear Parking Camera
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <h5>Upload Image</h5>
                        <div className="formrow">
                          <div className="uploadphotobx">
                            {" "}
                            <i className="fa fa-upload" aria-hidden="true"></i>
                            <h4>Upload your photo</h4>
                            <p>
                              Select multiple photo at a time using ctr button
                            </p>
                            <label className="uploadBox">
                              Click here to Upload
                              <input
                                
                                type="file"
                                name="upload"
                                onChange={handleImage}
                                multiple
                              />
                            </label>
                          </div>
                          {images &&
                            images.map((image, index) => (
                              <div className="fileattached" key={index}>
                                <img src={URL.createObjectURL(image)} alt="" />
                                <span>{image.name}</span>
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                ></i>
                                <div className="clearfix"></div>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Vehicle Description</h4>
                        <div className="formrow">
                          <textarea
                            required
                            className="form-control"
                            name="description"
                            placeholder="Vehicle Description"
                            value={formData.description}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                description: event.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <h4>Safety Description</h4>
                        <div className="formrow">
                          <textarea
                            required
                            className="form-control"
                            name="safetyDescription"
                            placeholder="Safety Description"
                            value={formData.safetyDescription}
                            onChange={(event) => {
                              setFormData({
                                ...formData,
                                safetyDescription: event.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* <br /> */}
                    <input type="submit" className="btn" value="Save Car" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCarDetails;
