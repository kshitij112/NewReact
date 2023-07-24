import { useState } from "react";
import SubNav from "../Navbar/SubNav";

import { useToast } from "@chakra-ui/react";
import { TOASTS, ToastUtility } from "../../util/toast.utilities";
import { useAddDealerMutation } from "../../api/dealersManegmentApiSlice";
import { CommonUtilities } from "../../util/common.utilities";
const AddDealer = () => {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    area: "",
    mobileNo:"",
   shopName:"",
    email: "",
    roles:"DEALER",
    password:""
  });
const [addDealer] = useAddDealerMutation()
  // const [inputRadio, setInputRadio] = useState({
  //   shopact: "",
  //   adhar: "",
  // });
  // const [images, setImages] = useState([]);
  const toastUtility = new ToastUtility(useToast());
  // function handleImage(event) {
  //   const fileList = event.target.files;
  //   const imageArray = Array.from(fileList);
  //   setImages(imageArray);
  //   console.log(imageArray);
  // }
  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    // const a = inputField;
    const { email, mobileNo } = inputField;

    if ( ! CommonUtilities.mobileNumberValidation(mobileNo) ) { 
      toastUtility.showError('Invalid Form', 'mobile number is not valid'); 
      return; 
    }

    if ( ! CommonUtilities.emailValidation(email) ) { 
      toastUtility.showError('Invalid Form', 'email is not valid'); 
      return; 
    }
    
    try {
      // console.log(inputField, inputRadio, images);
      console.log(inputField);
      const res = await addDealer(inputField).unwrap()
      console.log(res)
      toastUtility.showCustom(TOASTS.LOGIN_SUCCESS);
    } catch (error) {
      console.log(error)
      toastUtility.showCustom(TOASTS.FILE_ADD_FAILED);
    }
  };
  return (
    <>
      <SubNav componentsName={"Add Dealer"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="userccount">
                <div className="formpanel">
                  <h5>Add Dealer Details Page</h5>
                  <div className="row">
                    <form onSubmit={onSubmitHandler}>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="address details"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="city"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Mobile No</label>
                          <input
                            type="number"
                            name="mobileNo"
                            className="form-control"
                            placeholder="mobileNo"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                        <div className="formrow">
                          <label>Area</label>
                          <input
                            type="text"
                            name="area"
                            className="form-control"
                            placeholder="area"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                        <div className="formrow">
                          <input
                            type="number"
                            name="whatsApp"
                            className="form-control"
                            placeholder="whatsApp"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div> */}
                      {/* <div className="col-md-6">
                        <div className="formrow">
                          <input
                            type="number"
                            name="alternateNumber"
                            className="form-control"
                            placeholder="alternate number"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div> */}
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                        <div className="formrow">
                          <label>Shop Name</label>
                          <input
                            type="text"
                            name="shopName"
                            className="form-control"
                            placeholder="shopName"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      
                      </div>
                      <div className="col-md-6">
                      <div className="formrow">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                        </div>
                      <div className="col-md-12">
                        {/* <RadioGroup onChange={setInputRadio} value={inputRadio}>
                          <Stack spacing={5} direction="row">
                            <Radio
                              colorScheme="green"
                              name="shopact"
                              value="shopact"
                              color={"black"}
                            >
                              Shopact
                            </Radio>
                            <Radio
                              color={"black"}
                              colorScheme="green"
                              name="adhar"
                              value="adhar"
                            >
                              Adhar
                            </Radio>
                          </Stack>
                        </RadioGroup> */}
                        {/* <h5 style={{ marginTop: "1rem" }}>Upload Image</h5> */}
                        {/* <div className="formrow">
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
                                required
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
                        </div> */}
                      </div>
                      <br />
                      <input type="submit" className="btn" value="Post An Ad" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDealer;

// import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
// import { useState } from "react";
// import { Button } from "@chakra-ui/react";
// import { Radio, RadioGroup } from "@chakra-ui/react";
// import { Stack } from "@chakra-ui/react";
// const AddDealer = () => {
//   const [inputField, setInputField] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     area: "",
//     whatsApp: "",
//     alternateNumber: "",
//     email: "",
//     shopact: "",
//     adhar: "",
//   });
//   const [file, setFile] = useState();
//   function handleChange(e) {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
//   }
//   const onChangeFormHandler = (e) => {
//     const { name, value } = e.target;
//     setInputField((preVal) => {
//       return {
//         ...preVal,
//         [name]: value,
//       };
//     });
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     console.log(inputField);
//   };
//   return (
//     <>
//       <Box>
//         <FormControl>
//           <form onSubmit={onSubmitHandler}>
//             <FormLabel htmlFor="firstName">First Name</FormLabel>
//             <Input
//               type="text"
//               name="firstName"
//               onChange={onChangeFormHandler}
//               value={inputField.firstName}
//               required
//             />

//             <FormLabel>Last Name</FormLabel>
//             <Input
//               type="text"
//               name="lastName"
//               onChange={onChangeFormHandler}
//               value={inputField.lastName}
//             />
//             <FormLabel>Address Details</FormLabel>
//             <Input
//               type="text"
//               name="address"
//               onChange={onChangeFormHandler}
//               value={inputField.address}
//             />
//             <FormLabel>City</FormLabel>
//             <Input
//               type="text"
//               name="city"
//               onChange={onChangeFormHandler}
//               value={inputField.city}
//             />
//             <FormLabel>Area</FormLabel>
//             <Input
//               type="text"
//               name="area"
//               onChange={onChangeFormHandler}
//               value={inputField.area}
//             />
//             <FormLabel>WhatsApp Number</FormLabel>
//             <Input
//               type="text"
//               name="whatsApp"
//               onChange={onChangeFormHandler}
//               value={inputField.whatsApp}
//             />
//             <FormLabel>Alternate Number</FormLabel>
//             <Input
//               type="text"
//               name="alternateNumber"
//               onChange={onChangeFormHandler}
//               value={inputField.alternateNumber}
//             />
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               onChange={onChangeFormHandler}
//               value={inputField.email}
//             />
//             <RadioGroup onChange={setInputField} value={inputField}>
//               <Stack spacing={5} direction="row">
//                 <Radio colorScheme="green" name="shopact" value="shopact">
//                   Shopact
//                 </Radio>
//                 <Radio colorScheme="green" name="adhar" value="adhar">
//                   Adhar
//                 </Radio>
//               </Stack>
//             </RadioGroup>
//             <Input type="file" onChange={handleChange} />
//             {file ? (
//               <img src={file} style={{ height: "50px", width: "100px" }} />
//             ) : (
//               ""
//             )}
//           </form>
//         </FormControl>
//         <Button type="submit">Submit</Button>
//       </Box>
//     </>
//   );
// };

// export default AddDealer;
