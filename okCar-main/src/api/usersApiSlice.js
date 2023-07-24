import { apiSlice } from "./apiSlice";
const USERS_URL = "/admin";

const token = localStorage.getItem("userToken");
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      //done page
      query: (data) => ({
        url: "/jwt/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      //done page
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      //done page  this same api is user for user and dealer register
      query: (data) => ({

        url: "/account/register",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getAllUsers: builder.query({
      //not done page
      query: (id) => `/user/getAllUsers?pageNo=${id}`,
    }),




    forgotPassword: builder.mutation({
      query: (email) => {
        // console.log(`Email is ${email}`);
        console.log(`Email is ${email}`);
        return {
          url: `/cars/forgot-password?email=${email}`,
          method: "POST",
        }
      },
    }),

    resetPassword: builder.mutation({
      // done page
      query: (data) => {
        console.log(`Email is ${data}`);
        return {
          url: `/cars/reset-password`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json:charset=UTF-8",
          },
        }
      },
    }),

    // get user by id
    getUser: builder.query({
      query: (id) => {
        // console.log("id from User", id)
        // console.log(`token ${token}`)
        return {
          url: `/user/getUser/${id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      },
      providesTags: ["User"],
    }),


    // edit user by id
    updateUser: builder.mutation({
      //not done page
      query: ({ data }) => {
        console.log("data", data);
        console.log("id ", data.id);
        return {
          url: `/user/edit/${data.id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`
          }
        }
      },
      invalidatesTags: ["User"]
    }),

    // delete user by id
    deleteUser: builder.mutation({
      query: (data) => ({
        url: `/user/delete/${data.id}`,
        method: "DELETE",
        body: data,
        headers: {
          "Content-type": "application/json:charset=UTF-8",
        },
      }),
      invalidatesTags: ['User'],
    }),


  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetAllUsersQuery,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery
} = userApiSlice;
