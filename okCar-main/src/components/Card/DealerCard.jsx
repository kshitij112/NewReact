/* eslint-disable react/prop-types */
import { useState } from "react";
import { EditIcon, DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormLabel,
  Select,
  Input,
  FormControl,
  Textarea,
} from "@chakra-ui/react";

const DriverCard = ({
  DealerID,
  DealerName,
  Location,
  PhoneNo,
  TotalCars,
  TotalDeals,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  // delete item
  const handleDeleteItem = () => {
    console.log("Delete");
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      <Box className="cardContainer">
        <Center py={3}>
          <Box
            // maxW={"350px"}
            w={"full"}
            width={"310px"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={3}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {DealerName.firstName}
                </Heading>
              </Stack>

              <Box direction={"row"} justify={"center"} spacing={6}>
                <Text color={"gray.500"}>Dealer ID : {DealerID}</Text>
                <Text color={"gray.500"}>
                  Dealer&apos;s Name :{DealerName}
                </Text>
                <Text color={"gray.500"}>Location : {Location}</Text>
                <Text color={"gray.500"}>Phone No :{PhoneNo}</Text>
                <Text color={"gray.500"}>Total Cars :{TotalCars} </Text>
                <Text color={"gray.500"}>Total Deals :{TotalDeals} </Text>
                <Text color={"gray.500"}>
                  Car Details :
                  <Link to={`carDetails/${DealerID}`}>
                    <Button
                      variant="outline"
                      colorScheme="teal"
                      leftIcon={<ExternalLinkIcon />}
                      _hover={{ bg: "#5DC302" }}
                      mb={2}
                      size={"sm"}
                    >
                      Details
                    </Button>
                  </Link>
                </Text>
                <Text color={"gray.500"}>
                  Action :{" "}
                  <>
                    {/* Edit Button */}
                    <Button
                      variant="outline"
                      colorScheme="teal"
                      onClick={handleEditClick}
                      leftIcon={<EditIcon />}
                      _hover={{ bg: "#5DC302" }}
                      mr={2}
                      size={"sm"}
                    >
                      Edit
                    </Button>
                    {/* Delete */}
                    <Button
                      variant="outline"
                      colorScheme="teal"
                      onClick={handleDeleteClick}
                      leftIcon={<DeleteIcon />}
                      _hover={{ bg: "#5DC302" }}
                      size={"sm"}
                    >
                      Delete
                    </Button>
                    {/* Edit Modal */}
                    <Modal isOpen={isEditModalOpen} onClose={handleModalClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Edit Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input type="text" placeholder="Enter price" />
                            <FormLabel>Location</FormLabel>
                            <Input type="text" placeholder="Enter location" />
                            <FormLabel>Status</FormLabel>
                            <Select placeholder="Select status">
                              <option value="open">Open</option>
                              <option value="close">Close</option>
                            </Select>
                            <FormLabel>Car Details</FormLabel>
                            <Textarea placeholder="Enter car details" />
                          </FormControl>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="teal"
                            mr={3}
                            onClick={handleModalClose}
                          >
                            Save
                          </Button>
                          <Button variant="ghost" onClick={handleModalClose}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    {/* Delete Modal */}
                    <Modal
                      isOpen={isDeleteModalOpen}
                      onClose={handleModalClose}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Delete Item</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text>
                            Are you sure you want to delete this item?
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="red"
                            mr={3}
                            onClick={handleDeleteItem}
                          >
                            Delete
                          </Button>
                          <Button variant="ghost" onClick={handleModalClose}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>{" "}
                </Text>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default DriverCard;
