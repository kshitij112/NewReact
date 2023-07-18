import {configureStore} from '@reduxjs/toolkit'
// import googleReducer from '../../features/googleTokenSlice'
import authReducer from '../../api/authSlice'
import { apiSlice } from '../../api/apiSlice'

import {dealersManegmentApiSlice, dealersManegmentCarSlice} from '../../api/dealersManegmentApiSlice'
import { carApiSlice } from '../../api/carApiSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [dealersManegmentApiSlice.reducerPath]:dealersManegmentApiSlice.reducer,
        [carApiSlice.reducerPath]:carApiSlice.reducer,
        
        auth: authReducer,
        dealersSelectedCar: dealersManegmentCarSlice.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})