// import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const CardShimmer = () => {
  return (
    <div className="col-md-9 col-sm-7">
      <Box padding="6" boxShadow="lg" bg="white" my="20px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
};

export default CardShimmer;
