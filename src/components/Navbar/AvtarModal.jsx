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
import { useNavigate } from "react-router-dom";

import { logout } from "../../api/authSlice";
const AvtarModal = () => {
  const username = localStorage.getItem("userInfo");
  //  console.log(JSON.parse(username)?.results)
  console.log(JSON.parse(username))
   

  const dispatch = useDispatch();
  const navigate = useNavigate();



  const logoutHandler = async () => {
    try {
   
      dispatch(logout());
      navigate('/signin');
    } catch (err) {
      console.error(err);
    }
  };
   
  return (
    <Box className="card">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Menu bg="white">
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {JSON.parse(username)?.sub}
        </MenuButton>
        <MenuList>
          <MenuItem>History</MenuItem>
          <MenuItem>FAQ Managment</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Payment</MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default AvtarModal;
