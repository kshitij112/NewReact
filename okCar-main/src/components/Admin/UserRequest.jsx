import React from "react";
import TableModel from "../tableModel/TableModel";
import {userRequest} from '../../json/userRequest.json'
const UserRequest = () => {
    const data = React.useMemo(() => userRequest, []);
    const columns = React.useMemo(
      () => [
        {
          Header: "User Name",
          accessor: "userName",
        },
        {
          Header: "request ID",
          accessor: "requestID",
        },
        {
          Header: "Dealer ID",
          accessor: "DealerID",
        },
        {
          Header: "Location",
          accessor: "Location",
        },
        {
          Header: "Car ID",
          accessor: "CarID",
        },
        {
          Header: "Deal Status",
          accessor: "DealStatus",
        }
      ],
      []
    );
  
  return (
    <>
    <TableModel data={data} columns={columns} />
      
    </>
  )
}

export default UserRequest
