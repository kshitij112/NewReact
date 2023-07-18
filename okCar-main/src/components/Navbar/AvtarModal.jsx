import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../api/authSlice";
const AvtarModal = () => {
  const username = localStorage.getItem("userInfo");
  console.log(username);
  console.log(JSON.parse(username)?.firstname);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      dispatch(logout());
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className="card">
      <Avatar size={'sm'} marginRight={'0.3rem'} marginTop={'0.1rem'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Menu bg="white">
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
         marginTop={'0.2rem'}
          size={'sm'}
        >
          {JSON.parse(username)?.roles[0] === "ADMIN"
            ? "Admin"
            : JSON.parse(username)?.firstname}
     
        </MenuButton>
        <MenuList>
          {/* <MenuItem>History</MenuItem>
          <MenuItem>FAQ Managment</MenuItem>
          <MenuItem>Settings</MenuItem> */}
          <Link to="/edituserdetails">
            <MenuItem color={"black"}>Edit Profile</MenuItem>
          </Link>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default AvtarModal;
