import React, { useEffect, useState } from "react";
import TableM from "./TableM";
import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { InfoIcon,EditIcon,DeleteIcon} from "@chakra-ui/icons";
import { useDeleteDealerMutation } from "../../api/dealersManegmentApiSlice";
// import TableCard from "../TableCard/TableCard";
const Dealer = () => {

  const {id} = useParams()
  console.log(id)
  const { data: v,  isLoading,isError } = useGetAllDealerQuery();
  console.log(v);
  const [vendorFetchData, setVendorFetchData] = useState([]);
// const [catchUserId,setCatchUserId] = useState()

const [deleteDealer]  = useDeleteDealerMutation()
  const data = React.useMemo(() => vendorFetchData, [vendorFetchData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "dealer_id",
        
      },
      {
        Header: "First Name",
        accessor: "firstName",
        
      },
      
      {
        Header: "Last Name ",
        accessor: "lastName",
      },
      {
        Header: "Location",
        accessor: "area",
      },
      {
        Header: "Phone",
        accessor: "mobileNo",
      },
      // {
      //   Header: "Total Trips",
      //   accessor: "total_trips",
      // },
      // {
      //   Header: "Accept",
      //   accessor: "status.label",
      // },
      {
        Header: 'user id',
        accessor: 'userId',
        disableSortBy: true
      },
      // {
      //   Header: "Cars",
      //   Cell:(cell)=>{
      //     return(
      //       <>
      //          <Link to={` ${cell.row.values.dealer_id}`}>
      //       <Button
      //         variant="outline"
      //         colorScheme="blue"
      //         leftIcon={<InfoIcon />}
      //         marginRight={"0.2rem"}
      //         _hover={{ bg: "#2C5282", textColor: "white" }}
      //       >
      //         Active
      //       </Button>
      //     </Link>
      //          <Link to={` ${cell.row.values.dealer_id}`}>
      //       <Button
      //         variant="outline"
      //         colorScheme="blue"
      //         leftIcon={<InfoIcon />}
      //         marginRight={"0.2rem"}
      //         _hover={{ bg: "#2C5282", textColor: "white" }}
      //       >
      //         Pending
      //       </Button>
      //     </Link>
      //       </>
         
      //     )
      //   }
      // },
      {
        Header: "Edit",
        accessor: "Edit",
      
        Cell: (cell) => {
          console.log(cell.row.values.dealer_id)
          return(
          <div>
            <Link to={` ${cell.row.values.dealer_id}`}>
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

            {/* <Button
                variant="outline"
                colorScheme="teal"
                leftIcon={<EditIcon />}
                _hover={{ bg: "#5DC302" }}
                mr={2}
              >
                Edit
              </Button> */}

          
            <Link to={`/editDealerdetails/${cell.row.values.userId}/${cell.row.values.dealer_id}`}>
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

            
              <Button
                variant="outline"
                colorScheme="red"
                leftIcon={<DeleteIcon />}
                _hover={{ bg: "#E53E3E", textColor: "white" }}
                onClick={()=>deleteDealer(`${cell.row.values.dealer_id}`)}
              >
                Delete
              </Button>
          
          </div>
          )
        },
      },
    ],
    []
  );
  useEffect(() => {
    const getData = setTimeout(() => {
      setVendorFetchData(v.list);
    }, 100);

    return () => clearTimeout(getData);
  }, [v]);
  // useEffect(() => {
  //   const getData = setTimeout(() => {
  //     setCatchUserId(v.list);
  //   }, 100);

  //   return () => clearTimeout(getData);
  // }, [v]);

  return (
    <>
    
      <TableM
        data={data}
        columns={columns}
        FetchData={vendorFetchData}
        error={isError}
        isLoading={isLoading}
      />
      {/* <TableCard
       data={data}
       columns={columns}
       FetchData={vendorFetchData}
       error={isError}
       isLoading={isLoading}
      /> */}
    </>
  );
};

export default Dealer;
