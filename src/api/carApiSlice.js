import { apiSlice } from "./apiSlice";

const token = localStorage.getItem("userToken");

export const carApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Add car query
        addCar: builder.mutation({
            //done page
            query: (data) => ({
                url: "/car/carregister",
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            }),

        }),

        // get all cars query
        getAllCars: builder.query({
            query: (pageNo) => {
                console.log('slice page No', pageNo)
                return {
                    url: `cars/getAllCars?pageNo=${pageNo}`,
                    method: 'GET',
                }
            },
        }),

        // edit cars query
        editCar: builder.mutation({
            //done page
            query: (id) => ({
                url: `/car/edit/${id}`,
                method: "PUT",

            }),

        }),
        //delete car query
        deleteCar: builder.mutation({
            //done page
            query: (id) => ({
                url: `/car/delete/${id}`,
                method: "DELETE",

            }),

        }),


        //filter car query
        // filterCarQuery: builder.query({
        //     query: (data, id) => ({
        //         url: `/car/mainFilter/${id}`,
        //         method: "GET",
        //         body: data,
        //     }),
        // })


        filterCarQuery: builder.query({
            query: (data, pageNo) => {
                console.log('data', data)
                console.log(`pageNo:${pageNo}?minPrice=` )
                return {
                    url: `/car/mainFilter/${pageNo}`,
                    method: "GET",
                }
            }
        })

    }),

});


export const { useAddCarMutation, useGetAllCarsQuery, useFilterCarQueryQuery } = carApiSlice;