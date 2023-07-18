import { useEffect, useState, useMemo } from "react";
import React from "react";
import TableModel from "../tableModel/TableModel";
import { EditIcon, DeleteIcon, InfoIcon } from "@chakra-ui/icons";
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
  Flex,
  Badge
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useLazyGetDealerCarsQuery, useDeleteDealerCarMutation, setSelectedCar } from '../../api/dealersManegmentApiSlice';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../api/apiSlice';

const DealersModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const TYPE = { EDIT: "EDIT_CAR", DELETE: "DELETE_CAR" }
  const selectedCar = useMemo(() => {
    return { type: null, carId: null };
  }, []);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
    location: "",
    status: "",
    carDetails: "",
  });
  const userToken = `Bearer ${localStorage.getItem('userToken')}`;
  const { dealerId } = jwt_decode(userToken);
  // const [getDealersCars, { data: carsData, isLoading: il, isError: iE }] = useLazyGetDealerCarsQuery();

  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const [deleteDealerCar, { data: isDeleteCarLoading, isLoading: isDeleteCarError, isError: errorDeleteCar }] = useDeleteDealerCarMutation();
  const handleDeleteClick = async (id) => {
    selectedCar.type = TYPE.DELETE; selectedCar.carId = id;
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = async (id) => {
    selectedCar.type = TYPE.EDIT; selectedCar.carId = id;
    setIsEditModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  // edit item
  const handleEditItem = () => {
    const { carId: id, type } = selectedCar;
    if (!id || !type) return;
    if (type !== TYPE.EDIT) return;

    const carToUpdate = (carsData.filter(e => e.carId === id));
    if (!carToUpdate) return;
    dispatch(setSelectedCar(carToUpdate));
    navigate('/updateCarDetails');
  }


  // delete item
  const handleDeleteItem = () => {
    const { carId: id, type } = selectedCar;
    if (!id || !type) return;
    if (type !== TYPE.DELETE) return;
    deleteDealerCar({ id }).then(response => {
      if (response?.error) { console.error('An error occurred while deleting a car'); return; }

      fetchDealerCars().then(() => setIsDeleteModalOpen(false))
    }).catch(error => {
      console.log(error);
    });
  };

  const handleViewButtonClick = (id) => {
    navigate(`carDetails/${id}`);
  }

  async function fetchDealerCars() {
    // getDealersCars({ id: dealerId, pageNo: 0 }, { skip: !dealerId }).then(e => console.log(e));
    const url = baseUrl + `/car/dealer/${dealerId}/status/Active?pageNo=0`;
    const token = localStorage.getItem('userToken');
    const headers = { Authorization: `Bearer ${token}` }
    try{
      const { data } = await axios.get(url, { headers });
      setCarsData(state => {
        setIsLoading(e => false);
        setIsError(e => false);
        return data.list;
      });
    } catch (error) { 
      setCarsData(state => {
        setIsLoading(e => false);
        setIsError(e => false);
        return [];
      });
    }

  }

  useEffect(() => {
    fetchDealerCars();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Brand",
        accessor: "brand",
      },
      {
        Header: "Location",
        accessor: "area",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: (cell) => (
          <>{ Number(cell.value).toLocaleString("en-IN") }</>
        )
      },
      {
        Header: "Status",
        accessor: "carStatus",
        Cell: (cell) => (
          <>
          { (cell.value.toLowerCase() === 'active') && <Badge colorScheme='green'>ACTIVE</Badge> }
          { (cell.value.toLowerCase() !== 'active') && <Badge colorScheme='red'>INACTIVE</Badge> }
          </>
        )
      },
      {
        Header: "Car Details",
        accessor: "",
        Cell: (cell) => (
          // Cell: (cell) => (
          <Flex>
            {/* Edit Button */}
            {/* <Link to={`carDetails/${cell.value}`}> */}
            <Button
              variant="outline"
              colorScheme="blue"
              leftIcon={<InfoIcon />}
              marginRight={"0.2rem"}
              _hover={{ bg: "#2C5282", textColor: "white" }}
              onClick={() => handleViewButtonClick(cell.row.values.carId)}
            >
              Details
            </Button>
          </Flex>
        ),
      },
      {
        Header: "Action",
        accessor: "carId",
        Cell: (cell) => (
          <Flex>
            {/* Edit Button */}
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={() => handleEditClick(cell.value)}
              leftIcon={<EditIcon />}
              _hover={{ bg: "#5DC302" }}
              mr={2}
            >
              Edit
            </Button>

            {/* Delete */}
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => handleDeleteClick(cell.value)}
              leftIcon={<DeleteIcon />}
              _hover={{ bg: "#E53E3E", textColor: "white" }}
            >
              Delete
            </Button>
            {/* Edit Modal */}
            <EditModal />
            {/* Delete Modal */}
            <Modal isOpen={isDeleteModalOpen} onClose={handleModalClose}>
              <ModalOverlay style={{ backgroundColor: 'rgb(50, 50, 50, 0.1)' }} />
              <ModalContent>
                <ModalHeader>Delete Item</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Are you sure you want to delete this item?</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="red" mr={3} onClick={handleDeleteItem}>
                    Delete
                  </Button>
                  <Button variant="ghost" onClick={handleModalClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        ),
      },
    ],
    [
      isEditModalOpen,
      formData.price,
      formData.location,
      formData.status,
      formData.carDetails,
      isDeleteModalOpen,
    ]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error occurred while fetching dealer cars data.</div>;
  }

  function EditModal({ id }) {
    // return (
    //   <>
    //     <Modal isOpen={isEditModalOpen} onClose={handleModalClose}>
    //       <ModalOverlay style={{ backgroundColor: 'rgb(50, 50, 50, 0.1)' }} />
    //       <ModalContent>
    //         <ModalHeader>Edit Details</ModalHeader>
    //         <ModalCloseButton />
    //         <ModalBody>
    //           {/* <form onSubmit={handleFormSubmit}> */}
    //           <FormControl>
    //             <FormLabel>Price</FormLabel>
    //             <Input
    //               type="text"
    //               placeholder="Enter price"
    //               name="price"
    //               value={formData.price}
    //               onChange={handleInputChange}
    //             />
    //             <FormLabel>Location</FormLabel>
    //             <Input
    //               type="text"
    //               name="location"
    //               placeholder="Enter location"
    //               value={formData.location}
    //               onChange={handleInputChange}
    //             />
    //             <FormLabel>Status</FormLabel>
    //             <Select
    //               placeholder="Select status"
    //               name="status"
    //               value={formData.status}
    //               onChange={handleInputChange}
    //             >
    //               <option value="open">Open</option>
    //               <option value="close">Close</option>
    //             </Select>
    //             <FormLabel>Car Details</FormLabel>
    //             <Textarea
    //               placeholder="Enter car details"
    //               name="carDetails"
    //               value={formData.carDetails}
    //               onChange={handleInputChange}
    //             />
    //           </FormControl>
    //           {/* </form> */}
    //         </ModalBody>
    //         <ModalFooter>
    //           <Button colorScheme="teal" mr={3} onClick={handleModalClose}>
    //             Save
    //           </Button>
    //           <Button variant="ghost" onClick={handleModalClose}>
    //             Cancel
    //           </Button>
    //         </ModalFooter>
    //       </ModalContent>
    //     </Modal>
    //   </>
    // )

    return (
      <Modal isOpen={isEditModalOpen} onClose={handleModalClose}>
        <ModalOverlay style={{ backgroundColor: 'rgb(50, 50, 50, 0.1)' }} />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to edit this item?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleEditItem}>
              Edit
            </Button>
            <Button variant="ghost" onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  EditModal.propTypes = {
    id: PropTypes.number
  }

  return (
    <>
      <Flex justifyContent={"flex-end"} padding={"20px"}>
        <Link to="/addcardetails">
          <Button bgColor={"#5DC302"} _on>
            Add Car
          </Button>
        </Link>
      </Flex>
      {(!isLoading && !isError) && <TableModel data={carsData} FetchData={carsData} columns={columns} isError={false} isLoading={false} isSuccess={true} />}
    </>
  );
};

export default DealersModel;
