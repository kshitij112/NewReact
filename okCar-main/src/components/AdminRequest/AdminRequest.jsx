import React from "react";
import { buyers } from "../../json/buyers.json";
import TableModel from "../tableModel/TableModel";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import FormAddDriver from "./FormAddDriver";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";


import { FocusLock } from "@chakra-ui/react";
import "./adminrequest.css";

const AdminRequest = () => {
  const { onClose } = useDisclosure();
  const data = React.useMemo(() => buyers, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Make/Model",
        accessor: "MakeModel",
      },
      {
        Header: "Year",
        accessor: "Year",
      },
      {
        Header: "Dealer",
        accessor: "Dealer",
      },
      {
        Header: "Amount",
        accessor: "Amount",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
      {
        Header: "Value Offered",
        accessor: "ValueOffered",
      },
      {
        Header: "Accept/Rejected",
        accessor: "AcceptRejected",
      },
    ],
    []
  );

  const firstFieldRef = React.useRef(null);
  return (
    <>
      <div className="buttonHeader">
        
        <Popover
          // isOpen={isOpen}
          // initialFocusRef={firstFieldRef}
          // onOpen={onOpen}
          // onClose={onClose}
          placement="bottom"
          // closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button colorScheme="messenger">Add Dealer</Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <FormAddDriver firstFieldRef={firstFieldRef} onCancel={onClose} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </div>

      <TableModel data={data} columns={columns} />
    </>
  );
};

export default AdminRequest;
