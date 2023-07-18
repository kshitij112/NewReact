/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useEffect } from "react";
import "./adminpage.css";
const AdminPage = () => {
   const navigate = useNavigate();
 

  useEffect(() => {
    navigate("/dealersmanegment");
  }, []);
  return (
    <>
      <div className="Container">
        <Tabs isFitted>
          <TabList>
            <Link to={"/dealersmanegment"} spacing={4}>
              <Tab fontSize={"20px"}>
                <span>Dealer Management</span>{" "}
              </Tab>
            </Link>
            <Link to={"/userrequest"}>
              <Tab fontSize={"20px"}>
                
                <span>User Request</span>{" "}
              </Tab>
            </Link>
            <Link to={"/adddealer"}>
              <Tab fontSize={"20px"}>Add Dealer</Tab>
            </Link>
          </TabList>

          <TabPanels>
            <Outlet />
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default AdminPage;
