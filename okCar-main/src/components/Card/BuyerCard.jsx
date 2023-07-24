/* eslint-disable react/prop-types */
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";


const TableCard = ({
  customerName,
  MakeModel,
  Year,
  Dealer,
  Amount,
  Status,
  ValueOffered,
  AcceptRejected
}) => {
 
  return (
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
                Buyers Details
              </Heading>
            </Stack>

            <Box direction={"row"} justify={"center"} spacing={6}>
              <Text color={"gray.500"}>Customer Name :{customerName}</Text>
              <Text color={"gray.500"}>Make/Model :{MakeModel} </Text>
              <Text color={"gray.500"}>Year : {Year} </Text>
              <Text color={"gray.500"}>Dealer :{Dealer} </Text>
              <Text color={"gray.500"}>Amount : {Amount}</Text>
              <Text color={"gray.500"}>Status :{Status} </Text>
              <Text color={"gray.500"}>Value-Offered :{ValueOffered} </Text>
              <Text color={"gray.500"}>Accept/Reject :{AcceptRejected} </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default TableCard;

// export default function TableCard({customerName,MakeModel,}) {
//   return (
//     <Box className="cardContainer">
//       <Center py={6}>
//         <Box
//           // maxW={"350px"}
//           w={"full"}
//           width={"310px"}
//           bg={useColorModeValue("white", "gray.800")}
//           boxShadow={"2xl"}
//           rounded={"md"}
//           overflow={"hidden"}
//         >
//           <Box p={6}>
//             <Stack spacing={0} align={"center"} mb={5}>
//               <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
//                 Buyers Details
//               </Heading>
//             </Stack>

//             <Box direction={"row"} justify={"center"} spacing={6}>
//               <Text color={"gray.500"}>Customer Name : </Text>
//               <Text color={"gray.500"}>Make/Model : </Text>
//               <Text color={"gray.500"}>Year : </Text>
//               <Text color={"gray.500"}>Dealer : </Text>
//               <Text color={"gray.500"}>Amount : </Text>
//               <Text color={"gray.500"}>Status : </Text>
//               <Text color={"gray.500"}>Value-Offered : </Text>
//               <Text color={"gray.500"}>Accept/Reject : </Text>
//             </Box>
//           </Box>
//         </Box>
//       </Center>
//     </Box>
//   );
// }
