/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SubNav = ({ componentsName }) => {
  return (
    <div className="pageTitle" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h1 className="page-heading">{componentsName}</h1>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="breadCrumb">
              <Link to="/">
                Home /<span>{componentsName}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
