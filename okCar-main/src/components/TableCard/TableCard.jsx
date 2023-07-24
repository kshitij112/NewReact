// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/prop-types */
// import { Box } from "@chakra-ui/react";
// import "./tableCard.css";
// import BuyerCard from "../Card/BuyerCard";
// import DealerCard from "../Card/DealerCard";
// import DealerManegmentCard from "../Card/DealerManegmentCard";
// import UserRequestCard from "../Card/UserRequestCard";


// export default function TableCard({ CardDatas }) {
//   console.log(CardDatas)
//   let cardConditionalRender = Object.keys(CardDatas[0])[4];
//   console.log(cardConditionalRender)
//   let cardDetails;
//   if (cardConditionalRender === "customerName") {
//     cardDetails = CardDatas.map((cardData, index) => {
    
//       return (
//         <div key={index}>
//           <BuyerCard
//             customerName={cardData.customerName}
//             MakeModel={cardData.MakeModel}
//             Year={cardData.Year}
//             Dealer={cardData.Dealer}
//             Amount={cardData.Amount}
//             Status={cardData.Status}
//             ValueOffered={cardData.ValueOffered}
//             AcceptRejected={cardData.AcceptRejected}
//           />
//         </div>
//       );
//     });
//   } else if (cardConditionalRender === "firstName") {
//     cardDetails = CardDatas.map((cardData, index) => {
      
//       return (
//         <div key={index}>
//           <DealerCard
           
//             DealerName={cardData.firstName}
//             Location={cardData.area}
            
//           />
//         </div>
//       );
//     });
//   }else if(cardConditionalRender === 'dealersManegment'){
//     cardDetails = CardDatas.map((cardData, index) => {
//       console.log(cardData)
//       return (
//         <div key={index}>
//         <DealerManegmentCard
//         DealerID={cardData.DealerID}
//         DealerName={cardData.DealerName}
//         Location={cardData.Location}
//         ContactNo={cardData.TotalCars}
//         TotalCars={cardData.TotalCars}
//         />
//         </div>
//       );
//     });
//   }else if(cardConditionalRender === 'userName'){
//     cardDetails = CardDatas.map((cardData, index) => {
//       console.log(cardData)
//       return (
//         <div key={index}>
//         <UserRequestCard
//         CarID={cardData.CarID}
//         DealStatus={cardData.DealStatus}
//         DealerID={cardData.DealerID}
//         Location={cardData.Location}
//         RequestID={cardData.requestID}
//         Username={cardData.userName}

//         />
//         </div>
       
//       );
//     });
//   }

//   return <Box>{cardDetails}</Box>;
// }


import './tableCard.css'
// eslint-disable-next-line react/prop-types
const TableCard = ({data,isLoading,FetchData}) => {


  return (
    <div className='cardContainer'>
      <p>card details</p>
    </div>
  )
}

export default TableCard
