import React from "react";
// import { dealerdetails } from "../../json/dealerdetails.json";
import TableM from "./TableM";
import "./dealerdetails.css";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetDealerCarsDealerManegmentPageQuery, useGetDealerQuery } from "../../api/dealersManegmentApiSlice";

import { useState } from "react";
import { useEffect } from "react";
const DealerDetails = () => {
  const [dealerData,setDealerData]= useState([])
  let {id} = useParams()
  console.log(id)
  

  const {data:dealerID} = useGetDealerQuery({id})
  const {data:dealerCars,isError,isLoading} = useGetDealerCarsDealerManegmentPageQuery({id})
const [carData,setCarData] = useState([])
  console.log(dealerCars?.list)
  console.log(dealerID,'dealer')
  console.log(dealerID)
  console.log(dealerData)
  useEffect(()=>{
    setDealerData(dealerID?.dealerDto)
  },[dealerID])
  console.log(dealerData)
  const data = React.useMemo(() => carData, [carData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "CarId",
        accessor: "carId",
      },
      {
        Header: "Brand",
        accessor: "brand",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Fuel Type",
        accessor: "fuelType",
      },
      {
        Header: "Transmission",
        accessor: "transmission",
      },
      {
        Header: "Reg.No.",
        accessor: "registration",
      },
      {
        Header: "Area",
        accessor: "area",
      },
     
  
      {
        Header: "Owner Serial",
        accessor: "ownerSerial",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );
  useEffect(() => {
    const getData = setTimeout(() => {
      setCarData(dealerCars.list);
    }, 100);

    return () => clearTimeout(getData);
  }, [dealerCars]);
 
  return (
    <>
      <div className="containerCard">
        <div className="card-img">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="card-details"
          />
        </div>
        <div className="card-title">
          <Text>
            <Flex>
              <Heading size="md">{dealerData?.dealerDto?.firstName}</Heading>
            </Flex>

            <p>Dealer ID</p>
            <h5>{dealerData?.dealer_id}</h5>

            <p>Total Cars</p>
            <h5>{dealerData?.dealer_id}</h5>
          </Text>
        </div>
      </div>

      <TableM
        data={data}
        columns={columns}
        FetchData={carData}
        error={isError}
        isLoading={isLoading}
      />
    </>
  );
};

export default DealerDetails;
