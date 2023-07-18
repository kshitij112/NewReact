/* eslint-disable react/prop-types */

import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
const DealerManegmentCard = ({
  DealerID,
  DealerName,
  Location,
  ContactNo,
  TotalCars,
}) => {
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
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Dealer Manegment
                </Heading>
              </Stack>

              <Box direction={"row"} justify={"center"} spacing={6}>
                <Text color={"gray.500"}>Dealer Name :{DealerName}</Text>
                <Text color={"gray.500"}>DealerID :{DealerID} </Text>
                <Text color={"gray.500"}>Location : {Location} </Text>
                <Text color={"gray.500"}>Contact No :{ContactNo} </Text>
                <Text color={"gray.500"}>Total Cars : {TotalCars}</Text>
                <Text color={"gray.500"}>Edit :Edit </Text>
              </Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default DealerManegmentCard;
