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

        getCarById: builder.query({
            query: (id) => {
                console.log('Car ID', id)
                return {
                    url: `cars/getCar?carId=${id}`,
                    method: "GET"
                }
            }
        })


        //filter car query
        // filterCarQuery: builder.query({
        //     query: (data, id) => ({
        //         url: `/car/mainFilter/${id}`,
        //         method: "GET",
        //         body: data,
        //     }),
        // })


        // filterCarQuery: builder.query({
        //     query: (currentPage, year, minPrice, maxPrice, area, transmission, fuelType, brand, model) => {
        //         // console.log(1?minPrice=&maxPrice=&area=South Beach&year=2016&brand=Chevrolet&model=&transmission=&fuel_type=Petrol)
        //         console.log(`Filter Api Slice ${currentPage}?minPrice=${minPrice}&maxPrice=${maxPrice}&area=${area}&year=${year}&brand=${brand}&model=${model}&transmission=${transmission}&fuel_type=${fuelType}`)
        //         return {
        //             url: `/cars/mainFilter/${currentPage}?minPrice=${minPrice}&maxPrice=${maxPrice}&area=${area}&year=${year}&brand=${brand}&model=${model}&transmission=${transmission}&fuel_type=${fuelType}`,
        //             method: "GET",
        //         }
        //     }
        // })

    }),

});


export const { useAddCarMutation, useGetAllCarsQuery, useGetCarByIdQuery, useLazyGetCarByIdQuery } = carApiSlice;