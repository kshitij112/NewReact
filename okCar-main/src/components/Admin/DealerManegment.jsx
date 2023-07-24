import React, { useEffect, useState } from "react";

import { dealersManegment } from "../../json/dealersManegment.json";
import TableModel from "../tableModel/TableModel";
import { Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, InfoIcon } from "@chakra-ui/icons";
import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";

import { Link } from "react-router-dom";
const DealerManegment = () => {


  const userToken = localStorage.getItem("userToken");
  console.log(userToken);
  const { data: dealer } = useGetAllDealerQuery(userToken);
  console.log(dealer);
  const [dataDealer, setDealerData] = useState([]);
  console.log(dataDealer);
  console.log(dealersManegment);
  const data = React.useMemo(() => dealersManegment, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Dealer Name",
        accessor: `firstName`,
      },
      {
        Header: "Dealer Name",
        accessor: "lastName",
      },
      {
        Header: "Dealer ID",
        accessor: "DealerID",
      },
      {
        Header: "Area",
        accessor: "area",
      },
      {
        Header: "Contact No",
        accessor: "ContactNo",
      },
      {
        Header: "Total Cars",
        accessor: "TotalCars",
      },
      {
        Header: "Edit",
        accessor: "Edit",
        Cell: (cell) => (
          <div>
            <Link to={`${cell.value}`}>
              <Button
                variant="outline"
                colorScheme="blue"
                leftIcon={<InfoIcon />}
                marginRight={"0.2rem"}
                _hover={{ bg: "#2C5282", textColor: "white" }}
              >
                Details
              </Button>
            </Link>

            <Link to={`${cell.value}`}>
              <Button
                variant="outline"
                colorScheme="teal"
                leftIcon={<EditIcon />}
                _hover={{ bg: "#5DC302" }}
                mr={2}
              >
                Edit
              </Button>
            </Link>

            <Link to={`${cell.value}`}>
              <Button
                variant="outline"
                colorScheme="red"
                leftIcon={<DeleteIcon />}
                _hover={{ bg: "#E53E3E", textColor: "white" }}
              >
                Delete
              </Button>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const getData = setTimeout(() => {
      setDealerData(dealer.list);
    }, 100);

    return () => clearTimeout(getData);
  }, [dealer]);

  return (
    <>
      <TableModel data={data} columns={columns} FetchData={dataDealer} />
    </>
  );
};

export default DealerManegment;
