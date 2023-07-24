import { apiSlice } from "./apiSlice";
const USERS_URL='/'

export const dealerApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addCar:builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/`,
                method:"POST",
                body:data,
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                }
            })
        }),
        allCars:builder.query({
            query:()=>"/",
        }),
        getCar:builder.query({
            query:()=>"/"
        }),
        editCar:builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/`,
                method:"PATCH",
                body:data,
                headers:{
                    "Content-type":"application/json;charset=UTF-8"
                }
            })
           
        })
       


    })
})

export const {
useAddCarMutation,
useGetCarQuery,
useAllCarsQuery,
useEditCarMutation
} = dealerApiSlice