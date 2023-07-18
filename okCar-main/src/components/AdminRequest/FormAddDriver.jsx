/* eslint-disable react/prop-types */
import { Stack, Input, ButtonGroup, Button, FormLabel, Flex } from "@chakra-ui/react";
import { useState } from "react";

const FormAddDriver = ({ firstFieldRef, onCancel }) => {
  const [licenseUpload, setLicenseUpload] = useState("");

  const [dealer, setdealer] = useState({
    firstName: "",
    lastname:"",
    address: "",
    city:"",
    area:"",
    whatsAppNumber:"",
    alternateNumber:"",
    email:""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setdealer((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();

    try {
      console.log(dealer, licenseUpload);

      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack spacing={2} >
       
        <FormLabel>First Name</FormLabel>
        <Input
          label="Dealer's Full Name"
          id="firstName"
          name="firstName"
          ref={firstFieldRef}
          onChange={onChangeHandler}
          placeholder="please fill dealer name"
          value={dealer.firstName}
        />
        <FormLabel>Last Name</FormLabel>
        <Input
          label="Dealer's Full Name"
          id="lastName"
          name="lasttName"
          ref={firstFieldRef}
          onChange={onChangeHandler}
          placeholder="please fill dealer name"
          value={dealer.lastname}
        />
        <Flex >
        <FormLabel>Address</FormLabel>
        <Input
          label="address"
          id="address"
          name="address"
          placeholder="please fill address"
          value={dealer.address}
          onChange={onChangeHandler}
        />
        <FormLabel>City</FormLabel>
        <Input
          label="city"
          id="city"
          name="city"
          placeholder="please fill address"
          value={dealer.city}
          onChange={onChangeHandler}
        />
        </Flex>
        <FormLabel>Area</FormLabel>
        <Input
          label="area"
          id="area"
          name="area"
          placeholder="please fill address"
          value={dealer.area}
          onChange={onChangeHandler}
        />
        <FormLabel>WhatsApp Number</FormLabel>
        <Input
          label="area"
          id="area"
          name="area"
          placeholder="please fill address"
          value={dealer.whatsAppNumber}
          onChange={onChangeHandler}
        />
        <FormLabel>Alternate Number</FormLabel>
        <Input
          label="area"
          id="area"
          name="area"
          placeholder="please fill address"
          value={dealer.alternateNumber}
          onChange={onChangeHandler}
        />
        <FormLabel>Email</FormLabel>
        <Input
          label="email"
          id="email"
          name="email"
          placeholder="please fill address"
          value={dealer.email}
          onChange={onChangeHandler}
        />

        <FormLabel htmlFor="dealerUplaod">Upload dealer Licencs</FormLabel>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name="dealerUplaod"
          placeholder="please fill dealer linces"
          onChange={(e) => setLicenseUpload(e.target.files[0])}
        />
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button onClick={SubmitHandler} colorScheme="teal">
            Save
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default FormAddDriver;
